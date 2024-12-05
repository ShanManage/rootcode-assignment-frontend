import { Card, Divider, Flex, Typography } from "antd"
import { Post, TitleColor } from "../../../interface"

const PostCard = ({
  title,
  description,
  comments,
  titleColor
}: Post) => {
  const colorMap: Record<TitleColor, string> = {
    BLUE: 'blue',
    YELLOW: 'yellow',
    RED: 'red',
  };
  return (
    <Card hoverable className="full-width">
      <Flex justify="center">
        <Typography.Title level={4} style={{ color: colorMap[titleColor] }} ellipsis className="zero-margin">
          {title}
        </Typography.Title>
      </Flex>
      <Divider />
      <p>{description}</p>
      <Divider />
      <Flex justify="end">
        <Typography.Title level={5} ellipsis className="zero-margin">
          {comments.length} comments
        </Typography.Title>
      </Flex>

    </Card>
  )
}

export default PostCard
