import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 'auto',
  bgcolor: 'background.paper',
//   border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function CreateModal() {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <>
            <button onClick={handleOpen} className='bg-white text-green py-2 px-8 rounded border-green border-2'>
                Create Post
            </button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <div className='font-Poppins mb-4'>
                        <h1 className='text-green font-semibold text-2xl'>Create a new Post</h1>
                    </div>
                    <form className='flex flex-col gap-y-6 font-Poppins'>
                        <div className='flex flex-col gap-y-4'>
                            <label className='text-grey'>Tilte</label>
                            <input type='text' className='p-3 outline-none border-2 rounded border-post' />
                        </div>
                        <div className='flex flex-col gap-y-4'>
                            <label className='text-grey'>Description</label>
                            <input type='text' className='p-3 outline-none border-2 rounded border-post h-28' />
                        </div>
                        <div className='flex flex-col gap-y-4'>
                            <label className='text-grey'>Upload Photo</label>
                            <div className='flex'>
                                <input type='file' accept="image/*" className='p-3 outline-none border-2 border-post rounded-l-lg' />
                                <button className="p-3 bg-green text-white rounded-r-lg">Upload</button>
                            </div>
                        </div>
                        <div className='flex gap-x-4 justify-center'>
                            <button className='bg-none border-2 border-green text-green px-8 py-2 rounded'>Cancel</button>
                            <button className='bg-green  text-white px-8 py-2  rounded'>Post</button>

                        </div>
                    </form>
                </Box>
            </Modal>
        </>
    );
}
