
import { writeFileSync } from "fs";
import puppeteer from "puppeteer";
import * as figlet from 'figlet'
import { Command } from "commander";
import packageJson from '../package.json'
import { CLI } from "./CLI";
const CommandArgs = ['ls' , 'v']  as const

type processArgs = {
    [P in typeof CommandArgs[number]]?:boolean
}


async function getDescriptionFromProgrammers() {
    const browser = await puppeteer.launch({
        headless:'new'
    })
    const page = await browser.newPage()
    await page.goto('https://school.programmers.co.kr/learn/courses/30/lessons/42883')
    await new Promise(resolve => setTimeout(resolve, 2000))

    const testDescriptions = await page.evaluate(() => {
        const elements = [...document.querySelectorAll('div.main-section > .guide-section > div.guide-section-description > div.markdown > *')]
        return elements.map(el => el.outerHTML)
        
    })
    writeFileSync('issue.txt','<h5>문제설명</h5>\n' + testDescriptions.join('\n'))

    await browser.close()
}


// getDescriptionFromProgrammers()
const program = new CLI();
// console.log(figlet.textSync('TESTING CRAWLER'))

program
  .description("An example CLI for managing a directory")
  .version(packageJson.version)
  .option("-l | --ls  [value]", "List directory contents")
  .option("-m | --mkdir <value>", "Create a directory")
  .option("-t | --touch <value>", "Create a file")
  .option('-v | --version', 'show current version')
  .parse(process.argv);


const options = program.opts() as processArgs
const commandArray = process.argv.slice(2)
console.log(commandArray,'<<')


