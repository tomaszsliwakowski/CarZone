import "./pagination.scss";
import { FaAngleRight } from "react-icons/fa";
import { FaAngleLeft } from "react-icons/fa";
import { useFilterParams } from "../../hooks/useFilterParams";
import { useState } from "react";

const defaultPageList: number[] = [1, 2, 3];

export default function Pagination() {
  const { handleChange, searchParams } = useFilterParams();
  const pageNum: string | null = searchParams.get("page");
  const [page, setPage] = useState<number>(pageNum ? parseInt(pageNum) : 1);
  const maxPage: number = 10;

  const pageHandler = (action: string, value?: number): void => {
    switch (action) {
      case "back":
        if (page > 1) {
          setPage((prev) => (prev -= 1));
          handleChange("page", (page - 1).toString());
        }
        break;
      case "next":
        if (page < maxPage) {
          setPage((prev) => (prev += 1));
          handleChange("page", (page + 1).toString());
        }
        break;
      case "select":
        if (value) {
          setPage(value);
          handleChange("page", value.toString());
        }
        break;
      default:
        return;
    }
  };

  return (
    <div className="pagination">
      <ul>
        <li className="pagination__el" onClick={() => pageHandler("back")}>
          <FaAngleLeft className={page === 1 ? "inActive" : ""} />
        </li>
        {page === 1 ? (
          defaultPageList.map((item) => (
            <li
              key={item}
              className={`pagination__el__num ${item === 1 ? "selected" : ""}`}
              value={item}
              onClick={(e: React.MouseEvent<HTMLLIElement>) =>
                pageHandler("select", e.currentTarget.value)
              }
            >
              {item}
            </li>
          ))
        ) : (
          <>
            <li
              className="pagination__el__num"
              value={page === maxPage ? page - 2 : page - 1}
              onClick={(e: React.MouseEvent<HTMLLIElement>) =>
                pageHandler("select", e.currentTarget.value)
              }
            >
              {page === maxPage ? page - 2 : page - 1}
            </li>
            <li
              className={`pagination__el__num ${
                page !== maxPage ? "selected" : ""
              }`}
              value={page}
              onClick={(e: React.MouseEvent<HTMLLIElement>) =>
                pageHandler("select", e.currentTarget.value)
              }
            >
              {page === maxPage ? page - 1 : page}
            </li>
            <li
              className={`pagination__el__num ${
                page === maxPage ? "selected" : ""
              }`}
              value={page === maxPage ? page : page + 1}
              onClick={(e: React.MouseEvent<HTMLLIElement>) =>
                pageHandler("select", e.currentTarget.value)
              }
            >
              {page === maxPage ? page : page + 1}
            </li>
          </>
        )}
        <li className="pagination__el" onClick={() => pageHandler("next")}>
          <FaAngleRight className={page === maxPage ? "inActive" : ""} />
        </li>
      </ul>
    </div>
  );
}
