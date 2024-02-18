import fs from "node:fs";
import path from "node:path";

/**
 * 清理文件夹
 * @param directory 文件夹路径
 */
function clearDirectory(directory: string) {
    // 读取文件夹中的所有文件和文件夹
    const files = fs.readdirSync(directory);

    for (const file of files) {
        // 获取当前文件或文件夹的完整路径
        const fullPath = path.join(directory, file);
        // 检查当前路径是文件还是文件夹
        if (fs.lstatSync(fullPath).isDirectory()) {
            // 如果是文件夹，递归调用清理函数
            clearDirectory(fullPath);
            // 删除空文件夹
            fs.rmdirSync(fullPath);
        } else {
            // 如果是文件，直接删除文件
            fs.unlinkSync(fullPath);
        }
    }
}

/**
 * 获取文件头部字节
 * @param filePath 文件路径
 * @returns 文件头部字节
 */
function getFileHeader(filePath: string) {
    // 定义要读取的字节数
    const bytesToRead = 7;
    try {
        const buffer = fs.readFileSync(filePath, {
            encoding: null,
            flag: "r",
        });

        const fileHeader = buffer.toString("hex", 0, bytesToRead);
        return fileHeader;
    } catch (err) {
        console.error("读取文件错误:", err);
        return;
    }
}

/**
 * 打印输出
 * @param args 消息内容
 */
function output(...args: any[]) {
    console.log("\x1b[32m[LLAPI]\x1b[0m", ...args);
}

export { output, clearDirectory, getFileHeader };
