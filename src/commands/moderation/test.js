import { ApplicationCommandOptionType } from 'discord.js';
import determineTopTen from '../../utils/determineTopTen.js';

const addCommand = {
    name: "test",
    description: "test monkey",
    devOnly: true,
    // testOnly: Boolean, 
    // permissionsRequired: [PermissionFlagBits.Administrator],
    // botPermissions: [PermissionFlagBits.Administrator],
    callback: (client, interaction) => {interaction.reply("I like noodles.");}//command logic
};

export default addCommand;

