# PhenixBot
This is the source code for Phenix from PD Studios' official bot. Self-hosting instructions are provided if you would like to host this bot yourself.

## Tags
**YOUR_BOT_TOKEN = Your Bot's Token**

**BOT_PREFIX = Your Bot's Prefix**

**GAME_STATUS = Text that shows up on your profile. [Screenshot](Status.png)**

**UNVERIFIED_ROLE = A role to give to users when they join.**

**WELCOME_CHANNEL_ID = The ID of the #welcome message.**

**YOUR_WELCOME_MESSAGE = A message that the bot will say when someone joins the server.**

**SERVER_ID = The ID of your Discord server.**

**VOICE_CHANNEL_ID = The ID of your "Total Members:" voice channel.**

{ Host with [Replt.it](https://replit.com/@PDStudios/PhenixBot)! }

## Replacing code
1. Go to [power.js](power.js) and replace BOT_PREFIX with a custom prefix.
2. Replace GAME_STATUS with something you want the prefix to say.
3. Replace YOUR_STATUS with a status. ( 'dnd' for Do Not Disturb, 'idle' for Idle, 'offline' for Offline and 'online' for Online.
4. Replace UNVERIFIED_ROLE with a name of a role to give to users when they join.
5. Replace WELCOME_CHANNEL_ID with the ID of your #welcome channel.
6. Replace YOUR_WELCOME_MESSAGE with a message that you want to say to users when they join.
7. Replace YOUR_BOT_TOKEN with your bot's token.
8. Go to [member-counter.js](counters/member-counter.js) and replace SERVER_ID with your Server's ID.
9. Replace VOICE_CHANNEL_ID with the voice channel ID of the voice channel named 'Total Members;'.

## Adding token protection
To protect your bot token, install dotenv(npm i dotenv) and copy the files from the tag, Protected Bot Token. Then replace PROTECTION_TOKEN in .env your bot token. It's really easy.
