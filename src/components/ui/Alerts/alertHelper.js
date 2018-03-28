import { Modal } from 'antd';

const { confirm } = Modal;

export function showDeleteConfirm(props) {
  const defaultCancel = () => {};
  confirm({
    title: props.title,
    content: props.content,
    okText: 'OK',
    okType: 'danger',
    cancelText: 'Cancelar',
    onOk: props.onOk,
    onCancel: props.onCancel || defaultCancel,
  });
}
