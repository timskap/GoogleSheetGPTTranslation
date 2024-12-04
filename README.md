# Translate with GPT - Google Sheets Plugin

**Translate with GPT** is a custom plugin for Google Sheets that integrates OpenAI's GPT models to provide seamless text translation functionality. It allows you to translate text dynamically into any target language using a simple formula within your spreadsheet.

---

## Features

- **Dynamic Language Translation**: Specify a target language and translate text on the fly.
- **Simple Formula**: Use `=translateWithGPT(inputText, targetLanguage)` directly in Google Sheets.
- **Clean Output**: Automatically removes unnecessary quotation marks from the beginning and end of the translated text.
- **Customizable Models**: Utilizes OpenAI's GPT models (`gpt-4` by default).
- **Professional Translation**: Ensures high-quality results tailored for professional use cases.

---

## Installation

1. Open your Google Sheet.
2. Go to **Extensions > Apps Script**.
3. Copy and paste the plugin's code into the Apps Script editor.
4. Replace the placeholder `YOUR_API_KEY` with your OpenAI API key.
5. Save and close the Apps Script editor.

## Usage

### 1. Formula for Single Translation
You can use the `translateWithGPT` function directly in Google Sheets to translate a single piece of text.

**Syntax**:
```excel
=translateWithGPT("Text to translate", "Target Language")
