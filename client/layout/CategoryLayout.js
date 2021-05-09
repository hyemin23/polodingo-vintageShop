import ActiveLink from "../components/ActiveLink"
import CategoryStyle from "../style/CategoryStyle"

const CategoryLayout = () => {
  return (
    <CategoryStyle>
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
    </CategoryStyle>
  )
}

export default CategoryLayout
