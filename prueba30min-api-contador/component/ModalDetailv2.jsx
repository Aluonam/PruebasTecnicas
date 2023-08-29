import React, { useEffect, useState } from 'react';
import { Button, Modal } from 'antd';

const ModalDetailv2 = ({datosAPI}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  
  return (
    <>
      <Button type="primary" onClick={showModal}>
        Detallev2
      </Button>
      <Modal title={datosAPI.name} open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
        <p>{datosAPI.username}</p>
        <p>{datosAPI.email}</p>
        <p>{datosAPI.address?.street}</p>
        <p>{datosAPI.website}</p>
        <p>{datosAPI.company?.name}</p>
      </Modal>
    </>
  );
};

export default ModalDetailv2;


