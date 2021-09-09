import React from "react";
import {
    useDisclosure,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalFooter,
    Image, Center, IconButton, Box
} from "@chakra-ui/react";
import {CloseIcon, InfoIcon} from "@chakra-ui/icons";

interface ImageModalProps{
    url: string;
    title: string;
    explanation: string;
    date: string;
}

function ImageModal({url, title, explanation, date}:ImageModalProps) {
    const { isOpen, onOpen, onClose } = useDisclosure()
    return (
        <>
            <IconButton aria-label="info" onClick={onOpen} icon={<InfoIcon />} size="sm"/>
            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>{title}</ModalHeader>
                    <ModalBody>
                        <Center><Image src={url} alt={title} /></Center>
                    </ModalBody>
                    <ModalBody>
                        <Box as="span" color="gray.400" fontSize="sm">
                            {explanation}
                        </Box>
                    </ModalBody>
                    <ModalFooter>
                        <IconButton aria-label="close" mr={3} onClick={onClose} icon={<CloseIcon />}/>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    )
}

export default ImageModal;