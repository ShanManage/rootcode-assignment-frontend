import { Divider, Form, Modal, Space } from "antd"
import { CreatePostFormFields } from "../../../interface"
import TextArea from "antd/es/input/TextArea"
import { CustomInput, CustomButton } from "../../atom"
import { useSelector } from "react-redux"
import { RootState } from "../../../redux/store"

export interface CreatePostModalProps {
  isOpen: boolean
  onClose: () => void
  onFinish: (values: CreatePostFormFields) => void
}
const CreatePostModal = ({
  isOpen,
  onClose,
  onFinish
}: CreatePostModalProps) => {
  const isLoading = useSelector((state: RootState) => state.post.isLoading)
  return (
    <Modal
      title="CREATE POST"
      open={isOpen}
      onCancel={onClose}
      footer={null}
    >
      <Divider/>
      <Form onFinish={onFinish}>
        <Space direction="vertical" className="full-width">
          <Form.Item<CreatePostFormFields>
            name="title"
            rules={[
              { required: true, message: 'Please enter post title' },
            ]}
          >
            <CustomInput
              size='large'
              placeholder='Post Title'
            />
          </Form.Item>
          <Form.Item<CreatePostFormFields>
            name="description"
            rules={[{ required: true, message: 'Please enter post description' }]}
          >
            <TextArea
              size='large'
              rows={4}
              placeholder='Description'
            />
          </Form.Item>

          <Form.Item>
            <CustomButton
              type="primary"
              size='large'
              htmlType="submit"
              className='full-width'
              loading={isLoading}
            >
              CREATE POST
            </CustomButton>
          </Form.Item>

        </Space>
      </Form>
    </Modal>
  )
}

export default CreatePostModal
