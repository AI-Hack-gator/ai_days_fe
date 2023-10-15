import React, { useMemo } from 'react';
import {
  Box,
  VStack,
  List,
  ListItem,
  Heading,
  Text,
  Card,
  CardBody,
  CardHeader,
  CardFooter,
  Image,
  Button,
  ButtonGroup,
  Divider,
  StackDivider,
  Flex,
} from '@chakra-ui/react';

import {
  FaWifi,
  FaBatteryHalf,
  FaCamera,
  FaCogs,
  FaMobileAlt,
  // ... import other unique icons you'd like to use
  // @ts-ignore
} from 'react-icons/fa';
import { Row, Device, Plan, ProductType } from '../../types';

interface CardUiProps {
  row: Row;
}

const CardUi: React.FC<CardUiProps> = ({ row }) => {
  let productItems = row.ui_gen_output.product_items;

  const renderDevice = useMemo(() => {
    // @ts-ignore
    return productItems.map((device: Device) => (
        <Card 
          maxW="sm" 
          width="300px"   // This will ensure each card has the same width
        >
        <CardBody>
          <VStack align="start" spacing={4}>
            <Image src={device.image} alt={device.product} borderRadius="lg" />
            <Heading size="md">{device.product}</Heading>
            <Text>{device.overview}</Text>
            <Text color="brandPrimary.500" fontSize="2xl">
              {device.monthly_price}
            </Text>
          </VStack>
          <Text mt={2} color="brandSecondary.500">{device.other_features}</Text>
        </CardBody>
        <Divider ml="5%" w="90%" />
        <CardFooter display="flex" justifyContent="flex-end" w="100%">
          {/* link button to device.links */}
          <Button colorScheme='brandSecondary'>
            <a href={device.links} target="_blank" rel="noreferrer">
              Learn More
            </a>
          </Button>
        </CardFooter>
      </Card>
    ));
  }, [productItems]);

  const renderPlan = useMemo(() => {
    // @ts-ignore
    return productItems.map((plan: Plan) => (
      <Card width="200px">
        <CardHeader>
          <Heading size="md">{plan.product}</Heading>
        </CardHeader>
        <CardBody>
          <VStack divider={<StackDivider />} spacing={4}>
            <Box>
              <Heading size="xs" textTransform="uppercase">
                Access to 5G
              </Heading>
              <Text pt="2" fontSize="sm">
                {plan.access_to_5G}
              </Text>
            </Box>
            <Box>
              <Heading size="xs" textTransform="uppercase">
                Mobile Hotspot
              </Heading>
              <Text pt="2" fontSize="sm">
                {plan.mobile_hotspot}
              </Text>
            </Box>
            {/* ... other plan-specific fields */}
          </VStack>
        </CardBody>
        <Divider />
        <CardFooter>
          {/* Unique field for renderPlan */}
          <Text color="brandSecondary.500">Perks: {plan.perks_you_may_choose_between_for_an_additional_10_dollars}</Text>
        </CardFooter>
      </Card>
    ));
  }, [productItems]);



  return (
    <VStack w="100%" alignItems="flex-start">
      <Heading color="black" size="lg" textTransform="uppercase">
        {row.ui_gen_output.product_type}
      </Heading>
      <Flex 
        justifyContent="center" 
        gap={10} 
        p={4} 
        color="white" 
        borderRadius="md" 
        w="100%" 
        overflowX="auto" 
        css={{
          '&::-webkit-scrollbar': {
            width: '4px',
          },
          '&::-webkit-scrollbar-thumb': {
            backgroundColor: '#888',
            borderRadius: '2px',
          },
        }}
      >
        {row.ui_gen_output.product_type === ProductType.DEVICE ? (
          <Flex gap={6} flexShrink={0}>
            {renderDevice}
          </Flex>
        ) : (
          <Flex gap={6} flexShrink={0}>
            {renderPlan}
          </Flex>
        )}
      </Flex>
    </VStack>
  );
};

export default CardUi;