import { GeneratorOptions } from '@prisma/generator-helper';
import * as prettier from 'prettier';
export declare const GENERATOR_NAME = "Prisma Class Generator";
export declare const PrismaClassGeneratorOptions: {
    readonly makeIndexFile: {
        readonly desc: "make index file";
        readonly defaultValue: true;
    };
    readonly dryRun: {
        readonly desc: "dry run";
        readonly defaultValue: true;
    };
    readonly separateRelationFields: {
        readonly desc: "separate relation fields";
        readonly defaultValue: false;
    };
    readonly useSwagger: {
        readonly desc: "use swagger decorstor";
        readonly defaultValue: true;
    };
    readonly useGraphQL: {
        readonly desc: "use graphql";
        readonly defaultValue: false;
    };
    readonly useUndefinedDefault: {
        readonly desc: "use undefined default";
        readonly defaultValue: false;
    };
    readonly clientImportPath: {
        readonly desc: "set prisma import path instead @prisma/client";
        readonly defaultValue: any;
    };
    readonly useNonNullableAssertions: {
        readonly desc: "applies non-nullable assertions (!) to class properties";
        readonly defaultValue: false;
    };
    readonly preserveDefaultNullable: {
        readonly defaultValue: false;
        readonly desc: "preserve default nullable behavior";
    };
};
export type PrismaClassGeneratorOptionsKeys = keyof typeof PrismaClassGeneratorOptions;
export type PrismaClassGeneratorConfig = Partial<Record<PrismaClassGeneratorOptionsKeys, any>>;
export declare class PrismaClassGenerator {
    static instance: PrismaClassGenerator;
    _options: GeneratorOptions;
    _prettierOptions: prettier.Options;
    rootPath: string;
    clientPath: string;
    constructor(options?: GeneratorOptions);
    get options(): GeneratorOptions;
    set options(value: GeneratorOptions);
    get prettierOptions(): prettier.Options;
    set prettierOptions(value: prettier.Options);
    static getInstance(options?: GeneratorOptions): PrismaClassGenerator;
    getClientImportPath(): string;
    setPrismaClientPath(): void;
    run: () => Promise<void>;
    getConfig: () => PrismaClassGeneratorConfig;
}
