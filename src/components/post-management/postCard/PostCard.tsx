import { Card, Divider, Flex, Typography } from "antd"
import { Post, TitleColor } from "../../../interface"

export type PostCardProps = Post & {
  isDisable: boolean
  onClick?: () => void
}

const PostCard = ({
  title,
  description,
  comments,
  titleColor,
  isDisable,
  onClick
}: PostCardProps) => {
  const colorMap: Record<TitleColor, string> = {
    BLUE: 'blue',
    YELLOW: 'yellow',
    RED: 'red',
  };
  return (
    <Card hoverable className="full-width" onClick={!isDisable ? onClick : undefined }>
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
