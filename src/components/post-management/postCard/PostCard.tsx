import { Card } from "antd"
import { Post } from "../../../interface"

const PostCard = ({
  title,
  description
}: Post) => {
  return (
    <Card hoverable title={title} className="full-width">
      <p>{description}</p>
    </Card>
  )
}

export default PostCard
