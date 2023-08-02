import { AddHelpTextContext, AddHelpTextPosition, Argument, Command, CommandOptions, CommanderError, ErrorOptions, ExecutableCommandOptions, Help, HelpContext, HookEvent, Option, OptionValueSource, OptionValues, OutputConfiguration, ParseOptions, ParseOptionsResult } from "commander";

export class CLI implements Command {
    args: string[];
    processedArgs: any[];
    commands: readonly Command[];
    options: readonly Option[];
    parent: Command;
    version(str: string, flags?: string, description?: string): this {
        throw new Error("Method not implemented.");
    }
    command(nameAndArgs: string, opts?: CommandOptions): ReturnType<this["createCommand"]>;
    command(nameAndArgs: string, description: string, opts?: ExecutableCommandOptions): this;
    command(nameAndArgs: unknown, description?: unknown, opts?: unknown): this | ReturnType<this["createCommand"]> {
        throw new Error("Method not implemented.");
    }
    createCommand(name?: string): Command {
        throw new Error("Method not implemented.");
    }
    addCommand(cmd: Command, opts?: CommandOptions): this {
        throw new Error("Method not implemented.");
    }
    createArgument(name: string, description?: string): Argument {
        throw new Error("Method not implemented.");
    }
    argument<T>(flags: string, description: string, fn: (value: string, previous: T) => T, defaultValue?: T): this;
    argument(name: string, description?: string, defaultValue?: unknown): this;
    argument(flags: unknown, description?: unknown, fn?: unknown, defaultValue?: unknown): this {
        throw new Error("Method not implemented.");
    }
    addArgument(arg: Argument): this {
        throw new Error("Method not implemented.");
    }
    arguments(names: string): this {
        throw new Error("Method not implemented.");
    }
    addHelpCommand(enableOrNameAndArgs?: string | boolean, description?: string): this {
        throw new Error("Method not implemented.");
    }
    hook(event: HookEvent, listener: (thisCommand: Command, actionCommand: Command) => void | Promise<void>): this {
        throw new Error("Method not implemented.");
    }
    exitOverride(callback?: (err: CommanderError) => void): this {
        throw new Error("Method not implemented.");
    }
    error(message: string, errorOptions?: ErrorOptions): never {
        throw new Error("Method not implemented.");
    }
    createHelp(): Help {
        throw new Error("Method not implemented.");
    }
    configureHelp(configuration: Partial<Help>): this;
    configureHelp(): Partial<Help>;
    configureHelp(configuration?: unknown): this | Partial<import("commander").Help> {
        throw new Error("Method not implemented.");
    }
    configureOutput(configuration: OutputConfiguration): this;
    configureOutput(): OutputConfiguration;
    configureOutput(configuration?: unknown): this | import("commander").OutputConfiguration {
        throw new Error("Method not implemented.");
    }
    copyInheritedSettings(sourceCommand: Command): this {
        throw new Error("Method not implemented.");
    }
    showHelpAfterError(displayHelp?: string | boolean): this {
        throw new Error("Method not implemented.");
    }
    showSuggestionAfterError(displaySuggestion?: boolean): this {
        throw new Error("Method not implemented.");
    }
    action(fn: (...args: any[]) => void | Promise<void>): this {
        throw new Error("Method not implemented.");
    }
    option(flags: string, description?: string, defaultValue?: string | boolean | string[]): this;
    option<T>(flags: string, description: string, fn: (value: string, previous: T) => T, defaultValue?: T): this;
    option(flags: string, description: string, regexp: RegExp, defaultValue?: string | boolean | string[]): this;
    option(flags: unknown, description?: unknown, regexp?: unknown, defaultValue?: unknown): this {
        throw new Error("Method not implemented.");
    }
    requiredOption(flags: string, description?: string, defaultValue?: string | boolean | string[]): this;
    requiredOption<T>(flags: string, description: string, fn: (value: string, previous: T) => T, defaultValue?: T): this;
    requiredOption(flags: string, description: string, regexp: RegExp, defaultValue?: string | boolean | string[]): this;
    requiredOption(flags: unknown, description?: unknown, regexp?: unknown, defaultValue?: unknown): this {
        throw new Error("Method not implemented.");
    }
    createOption(flags: string, description?: string): Option {
        throw new Error("Method not implemented.");
    }
    addOption(option: Option): this {
        throw new Error("Method not implemented.");
    }
    storeOptionsAsProperties<T extends OptionValues>(): this & T;
    storeOptionsAsProperties<T extends OptionValues>(storeAsProperties: true): this & T;
    storeOptionsAsProperties(storeAsProperties?: boolean): this;
    storeOptionsAsProperties<T extends OptionValues>(storeAsProperties?: unknown): this | (this & T) | (this & T) {
        throw new Error("Method not implemented.");
    }
    getOptionValue(key: string) {
        throw new Error("Method not implemented.");
    }
    setOptionValue(key: string, value: unknown): this {
        throw new Error("Method not implemented.");
    }
    setOptionValueWithSource(key: string, value: unknown, source: OptionValueSource): this {
        throw new Error("Method not implemented.");
    }
    getOptionValueSource(key: string): OptionValueSource {
        throw new Error("Method not implemented.");
    }
    getOptionValueSourceWithGlobals(key: string): OptionValueSource {
        throw new Error("Method not implemented.");
    }
    combineFlagAndOptionalValue(combine?: boolean): this {
        throw new Error("Method not implemented.");
    }
    allowUnknownOption(allowUnknown?: boolean): this {
        throw new Error("Method not implemented.");
    }
    allowExcessArguments(allowExcess?: boolean): this {
        throw new Error("Method not implemented.");
    }
    enablePositionalOptions(positional?: boolean): this {
        throw new Error("Method not implemented.");
    }
    passThroughOptions(passThrough?: boolean): this {
        throw new Error("Method not implemented.");
    }
    parse(argv?: readonly string[], options?: ParseOptions): this {
        throw new Error("Method not implemented.");
    }
    parseAsync(argv?: readonly string[], options?: ParseOptions): Promise<this> {
        throw new Error("Method not implemented.");
    }
    parseOptions(argv: string[]): ParseOptionsResult {
        throw new Error("Method not implemented.");
    }
    opts<T extends OptionValues>(): T {
        throw new Error("Method not implemented.");
    }
    optsWithGlobals<T extends OptionValues>(): T {
        throw new Error("Method not implemented.");
    }
    description(str: string): this;
    description(str: string, argsDescription: Record<string, string>): this;
    description(): string;
    description(str?: unknown, argsDescription?: unknown): string | this {
        throw new Error("Method not implemented.");
    }
    summary(str: string): this;
    summary(): string;
    summary(str?: unknown): string | this {
        throw new Error("Method not implemented.");
    }
    alias(alias: string): this;
    alias(): string;
    alias(alias?: unknown): string | this {
        throw new Error("Method not implemented.");
    }
    aliases(aliases: readonly string[]): this;
    aliases(): string[];
    aliases(aliases?: unknown): this | string[] {
        throw new Error("Method not implemented.");
    }
    usage(str: string): this;
    usage(): string;
    usage(str?: unknown): string | this {
        throw new Error("Method not implemented.");
    }
    name(str: string): this;
    name(): string;
    name(str?: unknown): string | this {
        throw new Error("Method not implemented.");
    }
    nameFromFilename(filename: string): this {
        throw new Error("Method not implemented.");
    }
    executableDir(path: string): this;
    executableDir(): string;
    executableDir(path?: unknown): string | this {
        throw new Error("Method not implemented.");
    }
    outputHelp(context?: HelpContext): void;
    outputHelp(cb?: (str: string) => string): void;
    outputHelp(cb?: unknown): void {
        throw new Error("Method not implemented.");
    }
    helpInformation(context?: HelpContext): string {
        throw new Error("Method not implemented.");
    }
    helpOption(flags?: string | boolean, description?: string): this {
        throw new Error("Method not implemented.");
    }
    help(context?: HelpContext): never;
    help(cb?: (str: string) => string): never;
    help(cb?: unknown): never {
        throw new Error("Method not implemented.");
    }
    addHelpText(position: AddHelpTextPosition, text: string): this;
    addHelpText(position: AddHelpTextPosition, text: (context: AddHelpTextContext) => string): this;
    addHelpText(position: unknown, text: unknown): this {
        throw new Error("Method not implemented.");
    }
    on(event: string | symbol, listener: (...args: any[]) => void): this {
        throw new Error("Method not implemented.");
    }
    
}