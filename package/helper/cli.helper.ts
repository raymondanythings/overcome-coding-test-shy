import { OptionValues } from "commander"
type CLI_KEYS =  'number' | 'path'
type CLI_OPTIONS = {
    [key in  CLI_KEYS]? : string;
} & { help :boolean ; target : 'programmers' | 'baekjoon' }
export const parseArg = (argv : OptionValues) => {
    return argv as CLI_OPTIONS
}