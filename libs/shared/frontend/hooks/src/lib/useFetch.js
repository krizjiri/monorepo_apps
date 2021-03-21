import { __awaiter } from 'tslib';
import { useCallback, useState, useRef, useEffect, useMemo } from 'react';
const useFetch = ({ endpoint, fetchOnly }) => {
  const cancel = useRef(false);
  const [data, setData] = useState();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();
  useEffect(() => {
    return () => {
      cancel.current = true;
    };
  }, []);
  const fetch = useCallback(payload => {
    const request = () =>
      __awaiter(void 0, void 0, void 0, function* () {
        var _a, _b, _c;
        try {
          (_a =
            payload === null || payload === void 0
              ? void 0
              : payload.onInit) === null || _a === void 0
            ? void 0
            : _a.call(payload);
          if (!fetchOnly) {
            setLoading(true);
            setError(undefined);
          }
          const { data: responseData } = yield endpoint(
            payload === null || payload === void 0 ? void 0 : payload.params,
            payload === null || payload === void 0 ? void 0 : payload.id,
          );
          if (!cancel.current) {
            (_b =
              payload === null || payload === void 0
                ? void 0
                : payload.onSuccess) === null || _b === void 0
              ? void 0
              : _b.call(payload, responseData);
            if (!fetchOnly) {
              setData(responseData);
              setLoading(false);
            }
          }
        } catch (e) {
          if (!cancel.current) {
            (_c =
              payload === null || payload === void 0
                ? void 0
                : payload.onError) === null || _c === void 0
              ? void 0
              : _c.call(payload, e);
            if (!fetchOnly) {
              setError(e);
              setLoading(false);
            }
          }
        }
      });
    request();
  }, []);
  return useMemo(() => [fetch, { data, loading, error }], [
    data,
    loading,
    error,
  ]);
};
export { useFetch };
//# sourceMappingURL=useFetch.js.map
