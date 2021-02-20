import {
  Box,
  Chip,
  IconButton,
  Link,
  makeStyles,
  Typography,
} from "@material-ui/core"
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline"
import { SupportedLanguages } from "locales"
import { languageNameFromCode } from "locales/functions"
import * as React from "react"
import { Trans, useTranslation } from "react-i18next"

const useStyles = makeStyles((theme) => ({
  root: {
    alignItems: "center",
    display: "flex",
    justifyContent: "center",
    listStyleType: "none",
    margin: `0 0 ${theme.spacing(1)}px`,
    padding: 0,
    "& > li": {
      marginLeft: theme.spacing(0.5),
      marginRight: theme.spacing(0.5),
    },
  },
}))

export const LanguagePicker = () => {
  const classes = useStyles()
  const { t, i18n } = useTranslation()

  return (
    <Box textAlign="center">
      <ul className={classes.root}>
        {SupportedLanguages.map((code) => (
          <li key={code}>
            <Chip
              label={languageNameFromCode(code)}
              variant="outlined"
              color={code === i18n.language ? "primary" : "default"}
              onClick={() => {
                i18n.changeLanguage(code)
              }}
            />
          </li>
        ))}
        <li>
          <IconButton
            component={Link}
            size="small"
            href="https://github.com/avimoondra/fishbowl#Localization"
            target="_blank"
          >
            <AddCircleOutlineIcon />
          </IconButton>
        </li>
      </ul>
      <Typography color="textSecondary" variant="caption">
        <Trans t={t} i18nKey="languagesPoweredBy">
          {"Powered by our friends at "}
          <Link href="https://locize.com" target="_blank">
            {{ serviceName: "locize" }}
          </Link>
          .
        </Trans>
      </Typography>
    </Box>
  )
}
