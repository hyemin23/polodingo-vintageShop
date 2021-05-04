import React from "react"
import Product from "../../components/Product"
import CategoryLayout from "../../layout/CategoryLayout"
import { ProductLayout } from "../../layout/ProductLayout"
const { useRouter } = require("next/router")

const Category = () => {
  const router = useRouter()
  const { id } = router.query

  return (
    <div>
      <CategoryLayout />
      <div className="container" style={{ padding: "60px 5%" }}>
        <ProductLayout column="4">
          <Product id={id} />
        </ProductLayout>
      </div>
    </div>
  )
}
export default Category
