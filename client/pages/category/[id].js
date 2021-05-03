import React from "react"
import CategoryLayout from "../../layout/CategoryLayout"
const { useRouter } = require("next/router")

const Category = ({ href, name }) => {
  const router = useRouter()
  const { id } = router.query

  return (
    <div>
      <CategoryLayout />
      <h1>CategoryId : {id}</h1>
    </div>
  )
}
export default Category
