import { Command} from "commander";
import { parseArg } from "./helper/cli.helper";

const PROGRAMMERS_PREFIX = 'https://school.programmers.co.kr/learn/courses/30/lessons/'
const BAEKJOON_PREFIX = 'https://www.acmicpc.net/problem/'
type CommandArgs = 'ls' | 'v'
// TODO: 추상화 커스텀 구현해보기
export class CLI<T = CommandArgs> extends Command {  
    private readonly urls = {
        programmers : PROGRAMMERS_PREFIX,
        backjoon : BAEKJOON_PREFIX
    } 
    async execution(executionFn : (args:{url:string,path:string,target:'programmers' | 'baekjoon'}) => Promise<void>): Promise<this>{
        try{
            const {help, number,path,target} = parseArg(this.opts())
            if(!['programmers','baekjoon'].includes(target)){
                throw new Error('')
            }
            if(help){
                this.help()
            } else {
                const url = this.urls[target] + number
                await executionFn({url,path,target})
            }
        } catch(err){
            console.log(`ERROR : ${err.message}`)
            this.help()
        }
        return this
    }
}

