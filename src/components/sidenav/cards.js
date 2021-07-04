import { Box, Avatar, Badge, Tooltip } from "@chakra-ui/react";
import moment from 'moment'

function Card(props) {
  return props.users.map((user) => {
    return (
      <Box key={user.id} style={{ marginBottom: '8px' }} maxW="sm" borderWidth="1px" borderRadius="md" overflow="hidden">
        {/* <Image src={property.imageUrl} alt={property.imageAlt} /> */}

        <Box p="2">
          <Box d="flex" justifyContent="space-between" alignItems="center">
            <Avatar name={user.name} src={user.avatar} />
            <Box
              color="black.500"
              fontWeight="semibold"
              letterSpacing="wide"
              fontSize="xs"
              textTransform="uppercase"
              ml="2"
            >
              {user.name}
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

        </Box>
      </Box>
    )
  });
}

export default Card;
