"use client";

import { authClient } from "@/lib/auth-client";
import { Button, FieldError, Input, Label, Modal, Surface, TextField } from "@heroui/react";
import { BiEdit, BiSave, BiUser } from "react-icons/bi";
const UserUpdateModal = () => {
  const onSubmit = async (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const image = e.target.image.value;
    // const formData=new FormData(e.currentTarget)
    // const {name,image}=Object.fromEntries(formData)

    await authClient.updateUser({
      name: name,
      image: image,
    });
  };
  return (
    <Modal>
      <Button className="bg-[var(--accent)] text-[--text-main]">
        <BiEdit />
        Update User
      </Button>
      <Modal.Backdrop>
        <Modal.Container placement="auto">
          <Modal.Dialog className="sm:max-w-md">
            <Modal.CloseTrigger />
            <Modal.Header>
              <Modal.Icon className="bg-accent-soft text-accent-soft-foreground">
                <BiUser className="size-5" />
              </Modal.Icon>
              <Modal.Heading>Update User</Modal.Heading>
            </Modal.Header>
            <Modal.Body className="p-6">
              <Surface variant="default">
                <form onSubmit={onSubmit} className="flex flex-col gap-4">
                  <TextField
                    className="w-full"
                    name="name"
                    type="text"
                    validate={(value) => {
                      if (value.length < 3) {
                        return "Name must be at least 3 characters";
                      }
                      return null;
                    }}
                  >
                    <Label>Name</Label>
                    <Input placeholder="Enter your name" />
                    <FieldError />
                  </TextField>
                  <TextField className="w-full" name="image" type="url">
                    <Label>Image URL</Label>
                    <Input placeholder="Enter Image URL" />
                  </TextField>
                  <Modal.Footer>
                    <Button slot="close" variant="secondary">
                      Cancel
                    </Button>
                    <Button type="submit" slot="close">
                      <BiSave /> Save
                    </Button>
                  </Modal.Footer>
                </form>
              </Surface>
            </Modal.Body>
          </Modal.Dialog>
        </Modal.Container>
      </Modal.Backdrop>
    </Modal>
  );
};

export default UserUpdateModal;
