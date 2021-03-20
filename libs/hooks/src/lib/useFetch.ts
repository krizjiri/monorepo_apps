import { useCallback, useState, useRef, useEffect, useMemo } from 'react';
import { AxiosError, AxiosResponse } from 'axios';
import { Id } from 'libs/types/src/lib/types';

type Props<D, P> = {
  endpoint: (params?: P, id?: Id) => Promise<AxiosResponse<D>>;
  fetchOnly?: boolean;
};

type Payload<D, P> = {
  id?: Id;
  params?: P;
  onInit?: () => void;
  onSuccess?: (data?: D) => void;
  onError?: (error: AxiosError) => void;
};

type PayloadBag<D> = {
  loading: boolean;
  error?: AxiosError;
  data?: D;
};

type ReturnTuple<D, P> = [(payload?: Payload<D, P>) => void, PayloadBag<D>];

const useFetch = <D, P>({
  endpoint,
  fetchOnly,
}: Props<D, P>): ReturnTuple<D, P> => {
  const cancel = useRef(false);
  const [data, setData] = useState<D | undefined>();
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<AxiosError>();

  useEffect(() => {
    return () => {
      cancel.current = true;
    };
  }, []);

  const fetch = useCallback((payload?: Payload<D, P>) => {
    const request = async () => {
      try {
        payload?.onInit?.();

        if (!fetchOnly) {
          setLoading(true);
          setError(undefined);
        }

        const { data: responseData } = await endpoint(
          payload?.params,
          payload?.id,
        );

        if (!cancel.current) {
          payload?.onSuccess?.(responseData);

          if (!fetchOnly) {
            setData(responseData);
            setLoading(false);
          }
        }
      } catch (e) {
        if (!cancel.current) {
          payload?.onError?.(e);

          if (!fetchOnly) {
            setError(e);
            setLoading(false);
          }
        }
      }
    };

    request();
  }, []);

  return useMemo(() => [fetch, { data, loading, error }], [
    data,
    loading,
    error,
  ]);
};

export { Props as UseFetchProps, useFetch, Payload };
