// "use client";

// import {
//     Button,
//     CloseButton,
//     Drawer,
//     Portal,
//     HStack,
// } from "@chakra-ui/react";

// export default function SideDrawer({ isOpen, onClose }) {
//     return (
//         <Drawer.Root open={isOpen} onClose={onClose} placement="left" >
//             <Portal>
//                 <Drawer.Backdrop />
//                 <Drawer.Positioner>
//                     <Drawer.Content bg="blue.900" color="white" p={4}>
//                         <Drawer.Header>
//                             <Drawer.Title>Menu</Drawer.Title>
//                         </Drawer.Header>

//                         <Drawer.Body>
//                             {/* Your navigation links here */}
//                             <HStack direction="column" spacing={4}>
//                                 <Button variant="ghost" onClick={onClose} as="a" href="/">
//                                     Home
//                                 </Button>
//                                 <Button variant="ghost" onClick={onClose} as="a" href="/about">
//                                     About
//                                 </Button>
//                                 <Button variant="ghost" onClick={onClose} as="a" href="/products">
//                                     Products
//                                 </Button>
//                             </HStack>
//                         </Drawer.Body>

//                         <Drawer.Footer>
//                             <Drawer.CloseTrigger asChild>

//                                 <CloseButton onClick={onClose} />


//                             </Drawer.CloseTrigger>
//                         </Drawer.Footer>
//                     </Drawer.Content>
//                 </Drawer.Positioner>
//             </Portal>
//         </Drawer.Root>
//     );
// }
"use client";

import {
    Drawer,
    Portal,
    Button,
    VStack,
    CloseButton,
} from "@chakra-ui/react";
import Link from "next/link"; // You already have Next.js so use Link
import "./SideDrawer.scss"

export default function SideDrawer({ isOpen, onClose }) {
    return (
        <Drawer.Root open={isOpen} onClose={onClose} placement="start">
            <Portal>
                <Drawer.Backdrop />
                <Drawer.Positioner>
                    <Drawer.Content bg="blue.900" color="white" p={4}>
                        <Drawer.Header>
                            <Drawer.CloseTrigger asChild pos="start">
                                <CloseButton onClick={onClose} />
                            </Drawer.CloseTrigger>

                            {/* <Drawer.Title flex="1" fontSize="xl">Menu</Drawer.Title> */}
                        </Drawer.Header>

                        <Drawer.Body className="side-drawer-body">
                            <div className="menu-items">


                                <Link href="/" passHref>
                                    <Button variant="ghost" colorScheme="whiteAlpha" w="100%" onClick={onClose}>
                                        Home
                                    </Button>
                                </Link>

                                <Link href="/products" passHref>
                                    <Button variant="ghost" colorScheme="whiteAlpha" w="100%" onClick={onClose}>
                                        Products
                                    </Button>
                                </Link>

                                <Link href="/about" passHref>
                                    <Button variant="ghost" colorScheme="whiteAlpha" w="100%" onClick={onClose}>
                                        About Us
                                    </Button>
                                </Link>

                                <Link href="/contact" passHref>
                                    <Button variant="ghost" colorScheme="whiteAlpha" w="100%" onClick={onClose}>
                                        Contact
                                    </Button>
                                </Link>

                            </div>
                        </Drawer.Body>
                    </Drawer.Content>
                </Drawer.Positioner>
            </Portal>
        </Drawer.Root>
    );
}

