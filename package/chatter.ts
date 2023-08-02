
import { writeFileSync } from "fs";
import puppeteer from "puppeteer";
import * as figlet from 'figlet'
import packageJson from '../package.json'
import { CLI } from "./CLI";
import * as pt from 'path'


async function getDescriptionFromProgrammers({url,path} : {url : string; path:string}) {
    // algorithm-title
    const browser = await puppeteer.launch({
        headless:'new'
    })
    const page = await browser.newPage()
    await page.goto(url)
    await new Promise(resolve => setTimeout(resolve, 2000))

    const title = (await page.$eval('.algorithm-title',(el) => el.textContent)).trim()

    const testDescriptions = await page.evaluate(() => {
        const elements = [...document.querySelectorAll('div.main-section > .guide-section > div.guide-section-description > div.markdown > *')]
        return elements.map(el => el.outerHTML)
    })
    if(!testDescriptions.length){
        throw new Error('문제를 찾지 못했어요. 문제번호를 확인해주세요.')
    }
    const urlList = url.split('/')
    const location = pt.join(path,`${title ?? urlList[urlList.length-1]}.md`)
    console.log(`저장중....\n 경로 : ${location}`)
    writeFileSync(location, `<h1>${title}</h1>\n` +'<h5>문제설명</h5>\n' + testDescriptions.join('\n'))
    await browser.close()
    console.log("DONE!")
}




const program = new CLI();

program
    .description("코딩테스트 문제설명 크롤러 'Chatter'")
    .version(packageJson.version,'-v | --version',"현재 버전 표시")
    .option('-n | --number <value> required', '문제번호 (필수)')
    .option("-p | --path  <value>", "설명글을 저장할 위치",'./')
    .option("-t | --target <value>", "크롤링 위치 programmers | baekjoon",'programmers')
    .option('-h | --help', '명령어 도움말 출력')
    .parse(process.argv);
program.execution(({path,target,url}) => getDescriptionFromProgrammers({url,path}))
console.log(figlet.textSync('Chatter'))



