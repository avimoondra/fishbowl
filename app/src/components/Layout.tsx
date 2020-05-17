import { Box, Grow, IconButton, Snackbar } from "@material-ui/core"
import { TransitionProps } from "@material-ui/core/transitions/transition"
import CloseIcon from "@material-ui/icons/Close"
import { NotificationContext } from "contexts/Notification"
import * as React from "react"

function GrowTransition(props: TransitionProps) {
  return <Grow {...props} />
}

function Layout(props: { children: React.ReactNode }) {
  const [open, setOpen] = React.useState(false)
  const [message, setMessage] = React.useState<string | null>(null)

  const handleClose = () => setOpen(false)

  return (
    <Box>
      <Snackbar
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
        open={open}
        onClose={handleClose}
        autoHideDuration={3000}
        message={message}
        TransitionComponent={GrowTransition}
        action={
          <IconButton
            size="small"
            aria-label="close"
            color="inherit"
            onClick={handleClose}
          >
            <CloseIcon fontSize="small" />
          </IconButton>
        }
      ></Snackbar>
      <NotificationContext.Provider
        value={{
          send: (message: string) => {
            setMessage(message)
            setOpen(true)
          }
        }}
      >
        {props.children}
      </NotificationContext.Provider>
    </Box>
  )
}

export default Layout
