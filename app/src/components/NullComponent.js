// eslint-disable-next-line react/prop-types
export default ({ moduleName }) =>
  (process.env.NODE_ENV === 'development' ? (
    <div>
HIDDEN MODULE #
      {moduleName}
    </div>
) : null)
