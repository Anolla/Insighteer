import { Box, Avatar, Badge, Tooltip, Heading } from "@chakra-ui/react";
import moment from 'moment'
import { ArrowUpIcon, ArrowDownIcon } from '@chakra-ui/icons'


function Card(props) {
  return props.users.map((user) => {
    return (
      <Box key={user.id} style={{ marginBottom: '8px' }} maxW="sm" borderWidth="1px" borderRadius="md" overflow="hidden">
        {/* <Image src={property.imageUrl} alt={property.imageAlt} /> */}

        <Box p="2">
          <Box d="flex" justifyContent="space-between" alignItems="center">
            <Avatar size='sm' name={user.name} src={user.avatar} />
            <Box
              color="black.500"
              fontWeight="semibold"
              fontSize="xs"
              ml="2"
            >
              <Heading fontSize='xs' fontWeight='500'>
                {user.name}
              </Heading>
            </Box>
            <Tooltip label="Points" aria-label="A tooltip">
              <Badge borderRadius="full" px="2" colorScheme={props.color}>
                {user.points}
              </Badge>
            </Tooltip>
          </Box>
          <Box color="gray" fontSize="xs" paddingTop="2">
            Last Ticket: {user.last ? moment(user.last * 1000).startOf('s').fromNow() : 'none'}
          </Box>
          <Tooltip label="Feedback" aria-label="A tooltip">
            <Box textAlign='right' color="gray" fontSize="xs" paddingTop="2">
              <ArrowUpIcon size="10px" color='green' /> {user.up} | {user.down}  <ArrowDownIcon size="10px" color='red' />
            </Box>
          </Tooltip>
        </Box>
      </Box>
    )
  });
}

export default Card;
