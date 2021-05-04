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
              as="/category/all"
              activeClassName="all"
            >
              <a>All</a>
            </ActiveLink>
          </li>

          <li>
            <ActiveLink
              href="/category/[id]"
              as="/category/outer"
              activeClassName="outer"
            >
              <a>Outer</a>
            </ActiveLink>
          </li>

          <li>
            <ActiveLink
              href="/category/[id]"
              as="/category/top"
              activeClassName="top"
            >
              <a>Top</a>
            </ActiveLink>
          </li>

          <li>
            <ActiveLink
              href="/category/[id]"
              as="/category/pants"
              activeClassName="pants"
            >
              <a>Pants</a>
            </ActiveLink>
          </li>
          <li>
            <ActiveLink
              href="/category/[id]"
              as="/category/acc"
              activeClassName="acc"
            >
              <a>acc</a>
            </ActiveLink>
          </li>
        </ul>
      </div>
    </Category>
  )
}

const Category = styled.div`
  padding: 10rem 0 1rem 0;
  width: 100%;
  margin: auto;
  text-align: center;
  font-size: 1rem;

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
