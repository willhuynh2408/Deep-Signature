import { useMemo, useState } from "react";
import { CheckCircle2, ChevronDown, FileUp, Files, ShieldCheck, Upload, X } from "lucide-react";

const uploadCategories = [
  "Graduate records spreadsheet",
  "Degree certificate bundle",
  "Student transcript archive",
  "General file upload",
];

export default function BulkUpload() {
  const [category, setCategory] = useState("");
  const [files, setFiles] = useState<File[]>([]);
  const [submitted, setSubmitted] = useState(false);

  const totalSizeLabel = useMemo(() => {
    const totalBytes = files.reduce((sum, file) => sum + file.size, 0);
    if (totalBytes === 0) return "0 KB";
    const units = ["B", "KB", "MB", "GB"];
    let value = totalBytes;
    let index = 0;
    while (value >= 1024 && index < units.length - 1) {
      value /= 1024;
      index += 1;
    }
    return `${value.toFixed(value >= 10 || index === 0 ? 0 : 1)} ${units[index]}`;
  }, [files]);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const nextFiles = Array.from(event.target.files ?? []);
    setFiles(nextFiles);
    setSubmitted(false);
  };

  const removeFile = (name: string) => {
    setFiles((current) => current.filter((file) => file.name !== name));
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (!category || files.length === 0) return;
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen py-16 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="mb-10">
          <div className="inline-flex items-center gap-2 bg-cyan-500/10 border border-cyan-500/20 rounded-full px-4 py-2 mb-6">
            <Files className="w-4 h-4 text-cyan-400" />
            <span className="text-cyan-300 text-sm">For Institutes</span>
          </div>
          <h1
            className="text-white mb-3"
            style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(2.5rem, 6vw, 3.5rem)" }}
          >
            Bulk File Upload
          </h1>
          <p className="text-gray-400 max-w-3xl">
            Upload multiple files for batch processing in a single submission. Use this page for graduate record
            spreadsheets, certificate bundles, transcript archives, or general supporting files.
          </p>
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-[1.6fr_1fr] gap-6">
          <div className="bg-white/3 border border-white/8 rounded-2xl p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm text-gray-400 mb-2">
                  Upload Category <span className="text-rose-400">*</span>
                </label>
                <div className="relative">
                  <select
                    required
                    value={category}
                    onChange={(event) => setCategory(event.target.value)}
                    className="w-full appearance-none bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-cyan-500/60 focus:bg-white/8 transition-all text-sm [color-scheme:dark]"
                  >
                    <option value="" disabled className="bg-[#0f172a]">Select upload category...</option>
                    {uploadCategories.map((item) => (
                      <option key={item} value={item} className="bg-[#0f172a]">{item}</option>
                    ))}
                  </select>
                  <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500 pointer-events-none" />
                </div>
              </div>

              <div>
                <label className="block text-sm text-gray-400 mb-2">
                  Files <span className="text-rose-400">*</span>
                </label>
                <label className="block rounded-2xl border border-dashed border-cyan-500/30 bg-cyan-500/5 hover:bg-cyan-500/8 transition-all cursor-pointer">
                  <input
                    type="file"
                    multiple
                    accept=".csv,.xlsx,.xls,.pdf,.zip,.json"
                    onChange={handleFileChange}
                    className="sr-only"
                  />
                  <div className="px-6 py-12 text-center">
                    <div className="w-16 h-16 rounded-full bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center mx-auto mb-4">
                      <Upload className="w-8 h-8 text-cyan-300" />
                    </div>
                    <h2 className="text-white text-xl mb-2">Drop files here or browse</h2>
                    <p className="text-gray-400 text-sm max-w-md mx-auto">
                      Supports CSV, Excel, PDF, ZIP, and JSON files. Select multiple files in one action for batch
                      processing.
                    </p>
                  </div>
                </label>
              </div>

              {files.length > 0 && (
                <div className="rounded-2xl border border-white/8 bg-white/4 p-4">
                  <div className="flex items-center justify-between gap-3 mb-4">
                    <div>
                      <h3 className="text-white text-sm font-medium">Selected Files</h3>
                      <p className="text-xs text-gray-500">{files.length} files ready, total size {totalSizeLabel}</p>
                    </div>
                    <div className="inline-flex items-center gap-2 text-xs text-cyan-300 bg-cyan-500/10 border border-cyan-500/20 rounded-full px-3 py-1.5">
                      <FileUp className="w-3.5 h-3.5" />
                      Batch upload enabled
                    </div>
                  </div>

                  <div className="space-y-3">
                    {files.map((file) => (
                      <div
                        key={`${file.name}-${file.size}`}
                        className="flex items-center justify-between gap-4 rounded-xl border border-white/6 bg-[#0b152d] px-4 py-3"
                      >
                        <div className="min-w-0">
                          <p className="text-sm text-white truncate">{file.name}</p>
                          <p className="text-xs text-gray-500">{Math.max(1, Math.round(file.size / 1024))} KB</p>
                        </div>
                        <button
                          type="button"
                          onClick={() => removeFile(file.name)}
                          className="text-gray-500 hover:text-white transition-colors"
                          aria-label={`Remove ${file.name}`}
                        >
                          <X className="w-4 h-4" />
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              <div className="border-t border-white/5 pt-4">
                <p className="text-xs text-gray-500 mb-4">
                  Bulk uploads are queued for validation before records are processed into the Deeploma registry.
                </p>
                <button
                  type="submit"
                  className="w-full bg-cyan-500 hover:bg-cyan-400 text-white py-4 rounded-xl font-medium transition-all shadow-lg shadow-cyan-500/20 flex items-center justify-center gap-2"
                >
                  <Files className="w-4 h-4" />
                  Submit Bulk Upload
                </button>
              </div>
            </form>
          </div>

          <div className="space-y-6">
            <div className="bg-white/3 border border-white/8 rounded-2xl p-6">
              <h2 className="text-white text-lg mb-4">Upload Rules</h2>
              <div className="space-y-3 text-sm text-gray-400">
                <p>Use one category per batch to keep validation rules consistent.</p>
                <p>Spreadsheet uploads should include graduate identity and degree metadata in the same file.</p>
                <p>Certificate or transcript archives can be grouped as ZIP bundles for faster review.</p>
              </div>
            </div>

            <div className="bg-cyan-500/5 border border-cyan-500/15 rounded-2xl p-6">
              <div className="flex items-start gap-3">
                <ShieldCheck className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
                <div>
                  <h2 className="text-cyan-200 text-sm font-medium mb-2">Security Note</h2>
                  <p className="text-sm text-gray-400">
                    Uploaded files are treated as institutional records and should only be submitted by authorized
                    staff.
                  </p>
                </div>
              </div>
            </div>

            {submitted && (
              <div className="bg-emerald-500/5 border border-emerald-500/30 rounded-2xl p-6">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <h2 className="text-emerald-300 text-sm font-medium mb-2">Batch Received</h2>
                    <p className="text-sm text-gray-400">
                      {files.length} files were queued under {category}. This is currently a frontend flow with no
                      backend storage connected.
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
