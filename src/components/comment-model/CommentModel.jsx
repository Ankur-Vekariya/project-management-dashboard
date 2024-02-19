// import PropTypes from 'prop-types';
import { forwardRef } from 'react';

import Box from '@mui/material/Box';
import { Modal, alpha, Button, TextField, Typography } from '@mui/material';

import Iconify from '../iconify';

// ----------------------------------------------------------------------
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  bgcolor: 'background.paper',
  boxShadow: 24,
  borderRadius: 3,
  pt: 2,
  px: 4,
  pb: 3,
  minWidth: 800,
};
const CommentModel = forwardRef(({ isOpen, handleClosed, createComment, setComment }, ref) => (
  <Modal
    open={isOpen}
    onClose={handleClosed}
    aria-labelledby="child-modal-title"
    aria-describedby="child-modal-description"
  >
    <Box sx={{ ...style }}>
      <Typography variant="h4">Create Comment</Typography>
      <Box
        sx={{
          py: 2,
          px: 2.5,
          borderRadius: 1.5,
          bgcolor: (theme) => alpha(theme.palette.grey[600], 0.12),
        }}
      >
        <Box
          sx={{
            minWidth: 120,
          }}
        >
          <TextField
            sx={{ minWidth: 300, my: 2, mx: 2 }}
            id="outlined-basic"
            label="comment"
            variant="outlined"
            onChange={(e) => {
              setComment(e.target.value);
            }}
          />
        </Box>

        <Button
          variant="contained"
          color="inherit"
          startIcon={<Iconify icon="eva:plus-fill" />}
          onClick={() => {
            createComment();
          }}
          sx={{ minWidth: 300, my: 2, mx: 2 }}
        >
          Add Comment
        </Button>
      </Box>
    </Box>
  </Modal>
));

// CommentModel.propTypes = {
//   src: PropTypes.string,
//   sx: PropTypes.object,
// };

export default CommentModel;
