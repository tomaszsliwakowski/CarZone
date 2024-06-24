import FiltrWithList from "../filtr/filtrWithList";
import "./filters.scss";

export default function Filters() {
  return (
    <div className="filtersBar">
      <div className="body">
        <FiltrWithList />
      </div>
    </div>
  );
}
