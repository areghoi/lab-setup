
const loadedNumber = +(localStorage.getItem('idx') ?? 0) + 1;
const idx = String(loadedNumber).padStart(3, '0');
localStorage.setItem('idx', idx);

try {
  	await Deno.lstat("./work_dir");
  	console.log("moving directory");
	await Deno.rename("./work_dir", `./test_${idx}`);
} catch (err) {
  if (!(err instanceof Deno.errors.NotFound)) {
    throw err;
  }
  console.log("nothing to move...");
}

await Deno.mkdir("./work_dir/auto_gpt_workspace", { recursive: true });
await Deno.mkdir("./work_dir/data", { recursive: true });
await Deno.mkdir("./work_dir/logs", { recursive: true });
await Deno.copyFile("./ai_settings.template.yaml", "./work_dir/ai_settings.yaml");
