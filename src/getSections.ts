import { readFileSync, readdirSync } from "fs";
import { join } from "path";

export default function getSections() {
    const dir = join(
        __dirname,
        "../dat-references/plugin/web_root/admin/META/dat_reference/tags"
    );

    const files = readdirSync(dir, "utf-8");

    interface Tag {
        name: string;
        disp: string;
        desc: string;
        code: string;
        ex: string;
    }

    interface Section {
        section: string;
        description: string;
        tags: Tag[];
    }

    let sections: Section[] = [];

    for (let i = 0; i < files.length; i++) {
        if (files[i].includes("json")) {
            const fileContents = readFileSync(join(dir, files[i]), "utf-8");
            try {
                const json = JSON.parse(fileContents) as Section[];
                sections = [...sections, ...json];
            } catch (err) {
                console.log(err);
            }
        }
    }

    return sections;
}
