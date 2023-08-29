import React, { useEffect, useState } from 'react';
import { Button, Modal } from 'antd';

const ModalDetail = ({id}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [llamadaDetalleAPI, setLlamadaDetalleAPI] = useState({})

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    llamadaAPI()
  }, [])
  

  const llamadaAPI = async () => {
      const llamada = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
      const datos = await llamada.json();
      setLlamadaDetalleAPI(datos);
  }
  
  return (
    <>
      <Button type="primary" onClick={showModal}>
        Detalle
      </Button>
      <Modal title={llamadaDetalleAPI.name} open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
        <p>{llamadaDetalleAPI.username}</p>
        <p>{llamadaDetalleAPI.email}</p>
        <p>{llamadaDetalleAPI.address?.street}</p>
        <p>{llamadaDetalleAPI.website}</p>
        <p>{llamadaDetalleAPI.company?.name}</p>
      </Modal>
    </>
  );
};

export default ModalDetail;


