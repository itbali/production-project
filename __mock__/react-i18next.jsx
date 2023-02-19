const useMock = [(k) => k, {}];
useMock.t = (k) => k;
useMock.i18n = {
    changeLanguage: () => undefined,
    language: 'en',
};
export const withTranslation = () => (Component) => (props) => (
    // eslint-disable-next-line react/jsx-filename-extension
    <Component t={useMock.t} i18n={useMock.i18n} {...props} />
);
export const useTranslation = () => useMock;
