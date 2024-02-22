"use client";
import Layout from '@/components/layout/page'
import Section from '@/components/sectionLayout/page'
import BreadCrumb from "@/components/breadcrumb/page"
import { Input, Button, Textarea, useDisclosure, Select, SelectItem } from "@nextui-org/react"
import React, { useEffect, useRef, useState } from 'react';
import { useFormik } from 'formik';
import { toast } from 'react-toastify'
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter } from "@nextui-org/react";
import { useRouter } from 'next/router'

const Form = (props) => {
  const handleAddHotel = async (values) => {
    const res = await fetch(`http://localhost:${process.env.NEXT_PUBLIC_API_URL}/hotels`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(values)
    })
    const data = await res.json()
    if (res.status !== 200) {
      toast.warning(data.message)
      return
    }
    toast.success(data.message)
    props.onClose()
  }

  const formik = useFormik({
    initialValues: {
      name: '',
      description: '',
      location: '',
      // Add more fields as needed
    },
    onSubmit: values => {
      handleAddHotel(values)
    },
  });

  return (
    <div className=''>
      <form onSubmit={formik.handleSubmit} className="px-2 border-gray-500 rounded-md py-2 container mx-auto bg-white flex flex-wrap ">
        <h2 className="text-xl font-semibold text-center mb-1 color-black p-3">Add New Hotel</h2>
        <div className='w-full '>
          <Input
            type="text"
            name="name"
            onChange={formik.handleChange}
            value={formik.values.name}
            variant="bordered"
            label="Hotel Name"
            size="sm"
            radius="sm"
            className="mb-3"
            isRequired
          />
        </div>
        <div className='w-full'>
          <Textarea
            label="Description"
            name='description'
            size='sm'
            variant='bordered'
            radius="sm"
            className="mb-3"
            onChange={formik.handleChange}
            value={formik.values.description}
            isRequired
          />
        </div>
        <div className='w-full'>
          <Input
            type="text"
            name="location"
            onChange={formik.handleChange}
            value={formik.values.location}
            variant="bordered"
            label="Location"
            size="sm"
            radius="sm"
            className="mb-3"
            isRequired
          />
        </div>
        {/* Add more fields like rating, price, etc., as needed */}
        <div className='w-full'>
          <Button className='text-red-500 border border-red-500 bg-white rounded-md hover:bg-red-50' variant="flat" onPress={props.onClose}>
            Cancel
          </Button>
          <Button variant="flat" type="submit" className="signUpBtn ml-3 rounded-md mb-3">
            Add
          </Button>
        </div>
      </form>
    </div>
  )
}

const FormModal = ({ onClose, isOpen, onOpenChange }) => {
  return <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
    <ModalContent>
      {(onClose) => (
        <>
          <ModalBody>
            <Form onClose={onClose} />
          </ModalBody>
        </>
      )}
    </ModalContent>
  </Modal>
}

export default function AddHotel() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <>
      <Layout>
        <BreadCrumb page="Add Hotel" />
        <Section heading="Add Hotel" subHeading="Add a new hotel" bg="bg-gray-100">
          <div className='mt-5'>
            <FormModal isOpen={isOpen} onOpenChange={onOpenChange} />
            <Button variant="flat" onPress={onOpen} className="ml-3 text-red-500 border border-red-500 bg-white mb-3 rounded-md hover:bg-red-50">
              Add New Hotel
            </Button>
          </div>
        </Section>
      </Layout>
    </>
  )
}
