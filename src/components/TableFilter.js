export function TableFilter({ filterText, setFilterText }) {
  console.log("render 1");
  return (
    <>
      Search:
      <input
        value={filterText}
        onChange={(e) => {
          setFilterText(e.target.value);
        }}
        type="text"
      />
    </>
  );
}
