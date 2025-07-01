import { system, CommandPermissionLevel, CustomCommandParamType, CustomCommandStatus, Player } from "@minecraft/server";

system.beforeEvents.startup.subscribe((init) => {
  const clearchatCmd = {
    name: "nperma:clearchat",
    description: "clean your chat",
    permissionLevel: CommandPermissionLevel.Any,
    cheatsRequired: false
  };

  init.customCommandRegistry.registerCommand(clearchatCmd, clearchatHandler);
});

function clearchatHandler(origin) {
  const player = origin?.initiator || origin.sourceEntity;
  if (!(player instanceof Player)) return { status: CustomCommandStatus.Failure, message: "This Command only for Player." };

  system.run(() => player.runCommand(`execute as @e[c=2] as @e[c=2] as @e[c=2] as @e[c=2] as @e[c=2] as @e[c=2] as @e[c=2] run tellraw @a {"rawtext":[{"text":"clearchat-nperma"}]}`));
  system.runTimeout(() => {player.sendMessage(`§a§l[ClearChat] §r§aSuccessfully clearchat.`);player.playSound("random.orb")}, 20);

  return { status: CustomCommandStatus.Success };
}
