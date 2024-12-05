import { Card, Divider, Flex, Modal } from "antd"
import PostCard from "../postCard/PostCard"
import { useSelector } from "react-redux"
import { RootState } from "../../../redux/store"

export interface ViewPostModalProps {
  isOpen: boolean
  onClose: () => void
}

const ViewPostModal = ({
  isOpen,
  onClose
}: ViewPostModalProps) => {
  const isLoading = useSelector((state: RootState) => state.post.isLoading)
  const post = useSelector((state: RootState) => state.post.viewPost)
  return (
    <Modal
      title="VIEW POST"
      open={isOpen}
      onCancel={onClose}
      footer={null}
      loading={isLoading}
    >
      <PostCard isDisable={true} onClick={undefined} {...post} key={post.id} />
      <Divider />
      <Flex vertical gap={10}>
        {post.comments?.map((comment) => (
          <Card hoverable className="full-width" key={comment.id}>
            <p>{comment.content}</p>
          </Card>
        ))}
      </Flex>
    </Modal>
  )
}

export default ViewPostModal
