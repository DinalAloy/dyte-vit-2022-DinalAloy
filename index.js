#! /usr/bin/env node

import { program } from 'commander';

import check from "./commands/check.js";


program
  .command("input")
  .argument("[filename]", "input file name")
  .argument("[depend]")
  .option("-i")
  .description(
    "Give filename as input of all the github repo to be checked."
  )
  .action(check);

program.description("Checking dependency versions");
program.name("check");

program.parse(process.argv);