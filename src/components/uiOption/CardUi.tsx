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
      <Card backgroundColor="brandPrimary.500" color="white"  maxW="sm">
        <CardBody>
          <Image src={device.image} alt={device.product} borderRadius="lg" />
          <VStack align="start" spacing={4}>
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
      <Card colorScheme=''>
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
    <Flex justifyContent="space-between" gap={10} p={4} color="white" borderRadius="md" w="100%">
      {row.ui_gen_output.product_type === ProductType.DEVICE ? renderDevice : renderPlan}
    </Flex>
  );
};

export default CardUi;