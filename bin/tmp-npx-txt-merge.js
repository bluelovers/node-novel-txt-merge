#!/usr/bin/env node
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const yargs = require("yargs");
const path = require("path");
const index_1 = require("../index");
const PACKAGE_JSON = require("../package.json");
const updateNotifier = require("update-notifier");
const debug_color2_1 = require("debug-color2");
const console = new debug_color2_1.Console(null, {
    enabled: true,
    inspectOptions: {
        colors: true,
    },
    chalkOptions: {
        enabled: true,
    },
});
console.enabledColor = true;
const CWD = process.cwd();
updateNotifier({
    pkg: PACKAGE_JSON,
}).notify();
let cli = yargs
    .default({
//input: process.cwd(),
})
    .option('input', {
    alias: ['i'],
    //demandOption: true,
    requiresArg: true,
    normalize: true,
    type: 'string',
    desc: 'source novel txt folder path 要打包的 txt 來源資料夾',
})
    .option('output', {
    alias: ['o'],
    //demandOption: true,
    requiresArg: true,
    normalize: true,
    type: 'string',
    desc: ' output path 輸出資料夾',
    default: function () {
        return CWD;
    },
})
    .option('zh', {
    //default: true,
    boolean: true,
})
    .option('txtStyle', {
    desc: '內建的 txt 風格 0=預設 16=書僕',
    number: true,
})
    .option('configPath', {
    desc: '指定設定檔路徑會以設定檔內的資料來覆寫目前設定',
    normalize: true,
})
    // @ts-ignore
    .command('$0', '', function (yargs) {
    if (yargs.argv.zh) {
        yargs.locale('zh_CN');
    }
    let inputPath = yargs.argv.input || yargs.argv._[0] || CWD;
    let outputPath = yargs.argv.output;
    if (!path.isAbsolute(inputPath)) {
        inputPath = path.join(CWD, inputPath);
    }
    if (!path.isAbsolute(outputPath)) {
        outputPath = path.join(CWD, outputPath);
    }
    console.log(`currentPath:\n  `, inputPath);
    console.log(`inputPath:\n  `, inputPath);
    console.log(`outputPath:\n  `, outputPath);
    if (inputPath.indexOf(__dirname) == 0 || outputPath.indexOf(__dirname) == 0) {
        console.error(`[FAIL] path not allow`);
        yargs.showHelp();
        process.exit(1);
        return;
    }
    console.log(`\n`);
    //console.log(666, yargs.argv);
    return index_1.default(inputPath, outputPath, {
        txtStyle: yargs.argv.txtStyle,
        inputConfigPath: yargs.argv.configPath,
    });
    //yargs.showHelp('log');
})
    .version()
    //.help()
    .argv;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG1wLW5weC10eHQtbWVyZ2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJ0bXAtbnB4LXR4dC1tZXJnZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFFQSwrQkFBZ0M7QUFDaEMsNkJBQThCO0FBRTlCLG9DQUFnQztBQUNoQyxnREFBaUQ7QUFDakQsa0RBQW1EO0FBQ25ELCtDQUF1QztBQUN2QyxNQUFNLE9BQU8sR0FBRyxJQUFJLHNCQUFPLENBQUMsSUFBSSxFQUFFO0lBQ2pDLE9BQU8sRUFBRSxJQUFJO0lBQ2IsY0FBYyxFQUFFO1FBQ2YsTUFBTSxFQUFFLElBQUk7S0FDWjtJQUNELFlBQVksRUFBRTtRQUNiLE9BQU8sRUFBRSxJQUFJO0tBQ2I7Q0FDRCxDQUFDLENBQUM7QUFFSCxPQUFPLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQztBQUU1QixNQUFNLEdBQUcsR0FBRyxPQUFPLENBQUMsR0FBRyxFQUFFLENBQUM7QUFFMUIsY0FBYyxDQUFDO0lBQ2QsR0FBRyxFQUFFLFlBQVk7Q0FDakIsQ0FBQyxDQUFDLE1BQU0sRUFBRSxDQUFDO0FBRVosSUFBSSxHQUFHLEdBQUcsS0FBSztLQUNiLE9BQU8sQ0FBQztBQUNSLHVCQUF1QjtDQUN2QixDQUFDO0tBQ0QsTUFBTSxDQUFDLE9BQU8sRUFBRTtJQUNoQixLQUFLLEVBQUUsQ0FBQyxHQUFHLENBQUM7SUFDWixxQkFBcUI7SUFDckIsV0FBVyxFQUFFLElBQUk7SUFDakIsU0FBUyxFQUFFLElBQUk7SUFDZixJQUFJLEVBQUUsUUFBUTtJQUNkLElBQUksRUFBRSw2Q0FBNkM7Q0FPbkQsQ0FBQztLQUNELE1BQU0sQ0FBQyxRQUFRLEVBQUU7SUFDakIsS0FBSyxFQUFFLENBQUMsR0FBRyxDQUFDO0lBQ1oscUJBQXFCO0lBQ3JCLFdBQVcsRUFBRSxJQUFJO0lBQ2pCLFNBQVMsRUFBRSxJQUFJO0lBQ2YsSUFBSSxFQUFFLFFBQVE7SUFDZCxJQUFJLEVBQUUsb0JBQW9CO0lBQzFCLE9BQU8sRUFBRTtRQUVSLE9BQU8sR0FBRyxDQUFDO0lBQ1osQ0FBQztDQUNELENBQUM7S0FDRCxNQUFNLENBQUMsSUFBSSxFQUFFO0lBQ2IsZ0JBQWdCO0lBQ2hCLE9BQU8sRUFBRSxJQUFJO0NBQ2IsQ0FBQztLQUNELE1BQU0sQ0FBQyxVQUFVLEVBQUU7SUFDbkIsSUFBSSxFQUFFLHVCQUF1QjtJQUM3QixNQUFNLEVBQUUsSUFBSTtDQUNaLENBQUM7S0FDRCxNQUFNLENBQUMsWUFBWSxFQUFFO0lBQ3JCLElBQUksRUFBRSx5QkFBeUI7SUFDL0IsU0FBUyxFQUFFLElBQUk7Q0FDZixDQUFDO0lBQ0YsYUFBYTtLQUNaLE9BQU8sQ0FBQyxJQUFJLEVBQUUsRUFBRSxFQUFFLFVBQVUsS0FBSztJQUVqQyxJQUFJLEtBQUssQ0FBQyxJQUFJLENBQUMsRUFBRSxFQUNqQjtRQUNDLEtBQUssQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUM7S0FDdEI7SUFFRCxJQUFJLFNBQVMsR0FBRyxLQUFLLENBQUMsSUFBSSxDQUFDLEtBQUssSUFBSSxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxHQUFHLENBQUM7SUFDM0QsSUFBSSxVQUFVLEdBQUcsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUF1QixDQUFDO0lBRXBELElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLFNBQVMsQ0FBQyxFQUMvQjtRQUNDLFNBQVMsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxTQUFTLENBQUMsQ0FBQztLQUN0QztJQUVELElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLFVBQVUsQ0FBQyxFQUNoQztRQUNDLFVBQVUsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxVQUFVLENBQUMsQ0FBQztLQUN4QztJQUVELE9BQU8sQ0FBQyxHQUFHLENBQUMsa0JBQWtCLEVBQUUsU0FBUyxDQUFDLENBQUM7SUFDM0MsT0FBTyxDQUFDLEdBQUcsQ0FBQyxnQkFBZ0IsRUFBRSxTQUFTLENBQUMsQ0FBQztJQUN6QyxPQUFPLENBQUMsR0FBRyxDQUFDLGlCQUFpQixFQUFFLFVBQVUsQ0FBQyxDQUFDO0lBRTNDLElBQUksU0FBUyxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLElBQUksVUFBVSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLEVBQzNFO1FBQ0MsT0FBTyxDQUFDLEtBQUssQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDO1FBRXZDLEtBQUssQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUVqQixPQUFPLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBRWhCLE9BQU87S0FDUDtJQUVELE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7SUFFbEIsK0JBQStCO0lBRS9CLE9BQU8sZUFBUSxDQUFDLFNBQVMsRUFBRSxVQUFVLEVBQUU7UUFDdEMsUUFBUSxFQUFFLEtBQUssQ0FBQyxJQUFJLENBQUMsUUFBUTtRQUM3QixlQUFlLEVBQUUsS0FBSyxDQUFDLElBQUksQ0FBQyxVQUFVO0tBQ3RDLENBQUMsQ0FBQztJQUVILHdCQUF3QjtBQUN6QixDQUFDLENBQUM7S0FDRCxPQUFPLEVBQUU7SUFDVixTQUFTO0tBQ1IsSUFBSSxDQUNMIiwic291cmNlc0NvbnRlbnQiOlsiIyEvdXNyL2Jpbi9lbnYgbm9kZVxuXG5pbXBvcnQgeWFyZ3MgPSByZXF1aXJlKCd5YXJncycpO1xuaW1wb3J0IHBhdGggPSByZXF1aXJlKCdwYXRoJyk7XG5pbXBvcnQgUHJvbWlzZSA9IHJlcXVpcmUoJ2JsdWViaXJkJyk7XG5pbXBvcnQgdHh0TWVyZ2UgZnJvbSAnLi4vaW5kZXgnO1xuaW1wb3J0IFBBQ0tBR0VfSlNPTiA9IHJlcXVpcmUoJy4uL3BhY2thZ2UuanNvbicpO1xuaW1wb3J0IHVwZGF0ZU5vdGlmaWVyID0gcmVxdWlyZSgndXBkYXRlLW5vdGlmaWVyJyk7XG5pbXBvcnQgeyBDb25zb2xlIH0gZnJvbSAnZGVidWctY29sb3IyJztcbmNvbnN0IGNvbnNvbGUgPSBuZXcgQ29uc29sZShudWxsLCB7XG5cdGVuYWJsZWQ6IHRydWUsXG5cdGluc3BlY3RPcHRpb25zOiB7XG5cdFx0Y29sb3JzOiB0cnVlLFxuXHR9LFxuXHRjaGFsa09wdGlvbnM6IHtcblx0XHRlbmFibGVkOiB0cnVlLFxuXHR9LFxufSk7XG5cbmNvbnNvbGUuZW5hYmxlZENvbG9yID0gdHJ1ZTtcblxuY29uc3QgQ1dEID0gcHJvY2Vzcy5jd2QoKTtcblxudXBkYXRlTm90aWZpZXIoe1xuXHRwa2c6IFBBQ0tBR0VfSlNPTixcbn0pLm5vdGlmeSgpO1xuXG5sZXQgY2xpID0geWFyZ3Ncblx0LmRlZmF1bHQoe1xuXHRcdC8vaW5wdXQ6IHByb2Nlc3MuY3dkKCksXG5cdH0pXG5cdC5vcHRpb24oJ2lucHV0Jywge1xuXHRcdGFsaWFzOiBbJ2knXSxcblx0XHQvL2RlbWFuZE9wdGlvbjogdHJ1ZSxcblx0XHRyZXF1aXJlc0FyZzogdHJ1ZSxcblx0XHRub3JtYWxpemU6IHRydWUsXG5cdFx0dHlwZTogJ3N0cmluZycsXG5cdFx0ZGVzYzogJ3NvdXJjZSBub3ZlbCB0eHQgZm9sZGVyIHBhdGgg6KaB5omT5YyF55qEIHR4dCDkvobmupDos4fmlpnlpL4nLFxuXHRcdC8qXG5cdFx0ZGVmYXVsdDogZnVuY3Rpb24gKClcblx0XHR7XG5cdFx0XHQvL3JldHVybiBwcm9jZXNzLmN3ZCgpO1xuXHRcdH0sXG5cdFx0Ki9cblx0fSlcblx0Lm9wdGlvbignb3V0cHV0Jywge1xuXHRcdGFsaWFzOiBbJ28nXSxcblx0XHQvL2RlbWFuZE9wdGlvbjogdHJ1ZSxcblx0XHRyZXF1aXJlc0FyZzogdHJ1ZSxcblx0XHRub3JtYWxpemU6IHRydWUsXG5cdFx0dHlwZTogJ3N0cmluZycsXG5cdFx0ZGVzYzogJyBvdXRwdXQgcGF0aCDovLjlh7ros4fmlpnlpL4nLFxuXHRcdGRlZmF1bHQ6IGZ1bmN0aW9uICgpXG5cdFx0e1xuXHRcdFx0cmV0dXJuIENXRDtcblx0XHR9LFxuXHR9KVxuXHQub3B0aW9uKCd6aCcsIHtcblx0XHQvL2RlZmF1bHQ6IHRydWUsXG5cdFx0Ym9vbGVhbjogdHJ1ZSxcblx0fSlcblx0Lm9wdGlvbigndHh0U3R5bGUnLCB7XG5cdFx0ZGVzYzogJ+WFp+W7uueahCB0eHQg6aKo5qC8IDA96aCQ6KitIDE2PeabuOWDlScsXG5cdFx0bnVtYmVyOiB0cnVlLFxuXHR9KVxuXHQub3B0aW9uKCdjb25maWdQYXRoJywge1xuXHRcdGRlc2M6ICfmjIflrproqK3lrprmqpTot6/lvpHmnIPku6XoqK3lrprmqpTlhafnmoTos4fmlpnkvobopoblr6vnm67liY3oqK3lrponLFxuXHRcdG5vcm1hbGl6ZTogdHJ1ZSxcblx0fSlcblx0Ly8gQHRzLWlnbm9yZVxuXHQuY29tbWFuZCgnJDAnLCAnJywgZnVuY3Rpb24gKHlhcmdzKVxuXHR7XG5cdFx0aWYgKHlhcmdzLmFyZ3YuemgpXG5cdFx0e1xuXHRcdFx0eWFyZ3MubG9jYWxlKCd6aF9DTicpO1xuXHRcdH1cblxuXHRcdGxldCBpbnB1dFBhdGggPSB5YXJncy5hcmd2LmlucHV0IHx8IHlhcmdzLmFyZ3YuX1swXSB8fCBDV0Q7XG5cdFx0bGV0IG91dHB1dFBhdGggPSB5YXJncy5hcmd2Lm91dHB1dCBhcyBhbnkgYXMgc3RyaW5nO1xuXG5cdFx0aWYgKCFwYXRoLmlzQWJzb2x1dGUoaW5wdXRQYXRoKSlcblx0XHR7XG5cdFx0XHRpbnB1dFBhdGggPSBwYXRoLmpvaW4oQ1dELCBpbnB1dFBhdGgpO1xuXHRcdH1cblxuXHRcdGlmICghcGF0aC5pc0Fic29sdXRlKG91dHB1dFBhdGgpKVxuXHRcdHtcblx0XHRcdG91dHB1dFBhdGggPSBwYXRoLmpvaW4oQ1dELCBvdXRwdXRQYXRoKTtcblx0XHR9XG5cblx0XHRjb25zb2xlLmxvZyhgY3VycmVudFBhdGg6XFxuICBgLCBpbnB1dFBhdGgpO1xuXHRcdGNvbnNvbGUubG9nKGBpbnB1dFBhdGg6XFxuICBgLCBpbnB1dFBhdGgpO1xuXHRcdGNvbnNvbGUubG9nKGBvdXRwdXRQYXRoOlxcbiAgYCwgb3V0cHV0UGF0aCk7XG5cblx0XHRpZiAoaW5wdXRQYXRoLmluZGV4T2YoX19kaXJuYW1lKSA9PSAwIHx8IG91dHB1dFBhdGguaW5kZXhPZihfX2Rpcm5hbWUpID09IDApXG5cdFx0e1xuXHRcdFx0Y29uc29sZS5lcnJvcihgW0ZBSUxdIHBhdGggbm90IGFsbG93YCk7XG5cblx0XHRcdHlhcmdzLnNob3dIZWxwKCk7XG5cblx0XHRcdHByb2Nlc3MuZXhpdCgxKTtcblxuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdGNvbnNvbGUubG9nKGBcXG5gKTtcblxuXHRcdC8vY29uc29sZS5sb2coNjY2LCB5YXJncy5hcmd2KTtcblxuXHRcdHJldHVybiB0eHRNZXJnZShpbnB1dFBhdGgsIG91dHB1dFBhdGgsIHtcblx0XHRcdHR4dFN0eWxlOiB5YXJncy5hcmd2LnR4dFN0eWxlLFxuXHRcdFx0aW5wdXRDb25maWdQYXRoOiB5YXJncy5hcmd2LmNvbmZpZ1BhdGgsXG5cdFx0fSk7XG5cblx0XHQvL3lhcmdzLnNob3dIZWxwKCdsb2cnKTtcblx0fSlcblx0LnZlcnNpb24oKVxuXHQvLy5oZWxwKClcblx0LmFyZ3ZcbjtcbiJdfQ==