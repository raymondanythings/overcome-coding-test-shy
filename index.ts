import { writeFileSync } from "fs";
import puppeteer from "puppeteer";

async function getDescriptionFromProgrammers() {
    const browser = await puppeteer.launch({
        headless:true
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


getDescriptionFromProgrammers()