import Link from "next/link"
import styled from "styled-components"
import ActiveLink from "../components/ActiveLink"

const CategoryLayout = () => {
  return (
    <Category>
      <div>
        <ul className="productLanding_filter">
          <li>
            <ActiveLink
              href="/category/[id]"
              as="/category/All"
              activeClassName="All"
            >
              <a class="aTagActive">All</a>
            </ActiveLink>
          </li>

          <li>
            <ActiveLink
              href="/category/[id]"
              as="/category/outer"
              activeClassName="outer"
            >
              <a>123</a>
            </ActiveLink>
          </li>

          <li>
            <Link href="/category/[id]" as="/category/상의" passHref>
              <a>상의</a>
            </Link>
          </li>

          <li>
            <Link
              href="#"
              href="/category/[id]"
              as="/category/하의"
              activeClass="active"
            >
              <a>하의</a>
            </Link>
          </li>
          <li>
            <Link
              href="#"
              href="/category/[id]"
              as="/category/아우터"
              activeClass="active"
            >
              <a>아우터</a>
            </Link>
          </li>

          <li>
            <Link
              href="#"
              href="/category/[id]"
              as="/category/악세사리"
              activeClass="active"
            >
              <a>악세사리</a>
            </Link>
          </li>

          <li>
            <Link
              href="#"
              href="/category/[id]"
              as="/category/신발"
              activeClass="active"
            >
              <a>신발</a>
            </Link>
          </li>
        </ul>
      </div>
    </Category>
  )
}

const Category = styled.div`
  padding: 10rem 0;
  width: 100%;
  margin: auto;
  text-align: center;

  .aTagActive {
    color: red !important;
  }

  .productLanding_filter {
    display: flex;
    justify-content: center;
    margin-bottom: 1rem;

    li {
      margin-right: 1rem;
    }
  }
`

export default CategoryLayout
