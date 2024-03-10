import { useRef, useState } from "react";
import "./helmunusedtool.scss";
import { motion, useInView } from "framer-motion";

const variants = {
  initial: {
    y: 500,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      staggerChildren: 0.1,
    },
  },
};

const Container = ({ children }) => {
  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      overflowX: 'hidden',
      scrollbarWidth: 'thin',
      scrollbarColor: '#061a30 #0c0c1d'
    }}>
      <div style={{
        maxWidth: '1366px',
        width: '100%',
        overflowY: 'scroll',
        scrollbarWidth: 'thin',
        scrollbarColor: '#061a30 #0c0c1d'
      }}>
        {children}
      </div>
    </div>
  );
};

const CodeSnippetContainer = ({ children }) => {
  const copyCode = () => {
    const codeToCopy = document.getElementById("codeSnippet").textContent;
    navigator.clipboard.writeText(codeToCopy)
      .then(() => alert("Code copied to clipboard!"))
      .catch((error) => console.error("Unable to copy code to clipboard", error));
  };

  return (
    <div id="codeSnippetContainer" className="codeSnippetContainer">
      <div className="copy-btn" onClick={copyCode} title="Copy to clipboard">
        <span role="img" aria-label="Copy">📋</span>
      </div>
      {children}
    </div>
  );
};


const HelmunusedTool = () => {
  const ref = useRef();

  return (
    <Container>
      <motion.div
        ref={ref}
        className="helmunused_tool"
        variants={variants}
        initial="initial"
        whileInView="animate"
        style={{ overflowY: "auto", maxHeight: "calc(100vh - 100px)" }} // Adjust the maxHeight value as needed
      >
        <motion.div className="textContainer" variants={variants}>
          <motion.h1 variants={variants}><motion.b whileHover={{color:"orange"}} style={{ marginBottom: '20px' }}>Helm Chart Unused Values Finder</motion.b></motion.h1>
          <motion.p variants={variants} style={{ marginBottom: '10px' }}>
            This Python script helps identify unused values in Helm chart templates. By placing it in the root directory of your Helm chart and running it with Python 3, you can efficiently manage your chart's configuration.
          </motion.p>
          <motion.p variants={variants} style={{ marginBottom: '10px' }}>
            The script compares the keys defined in your Helm values file (typically named <code>values.example.yaml</code>) with those referenced in your chart's templates. It then prints out any keys that are defined but not utilized in the templates, facilitating cleanup and optimization.
          </motion.p>
        </motion.div>
    
        <motion.div className="textContainer" variants={variants}>
          <motion.p variants={variants} style={{ marginBottom: '10px' }}>
            <strong>Instructions:</strong>
          </motion.p>
          <motion.p variants={variants} style={{ marginBottom: '10px' }}>
            <strong>1. Preparation:</strong>
          </motion.p>
          <motion.p variants={variants} style={{ marginBottom: '10px' }}>
            <ul>
              <li>Ensure you have Python 3 installed on your system.</li>
              <li>Place the script in the root directory of your Helm chart.</li>
              <li>Ensure your Helm values file is named <code>values.example.yaml</code>. If not, adjust the <code>values_filename</code> variable in the script.</li>
              <li>Make sure your Helm templates are stored in a directory named <code>templates</code>. If not, update the <code>templates_dirname</code> variable in the script.</li>
              <li>If there are specific keys you want to exclude from the analysis, update the <code>exclude_key_word</code> variable in the script accordingly.</li>
            </ul>
          </motion.p>
          <motion.p variants={variants} style={{ marginBottom: '10px' }}>
            <strong>2. Run the Script:</strong>
          </motion.p>
          <motion.p variants={variants} style={{ marginBottom: '10px' }}>
            <ul>
              <li>Open a terminal or command prompt.</li>
              <li>Navigate to the root directory of your Helm chart.</li>
              <li>Execute the script by running <code>python script_name.py</code> (replace <code>script_name.py</code> with the actual name of your script).</li>
            </ul>
          </motion.p>
          <motion.p variants={variants} style={{ marginBottom: '10px' }}>
            <strong>3. Review Output:</strong>
          </motion.p>
          <motion.p variants={variants} style={{ marginBottom: '10px' }}>
            <ul>
              <li>The script will print any keys found in your values file that are not used in your templates.</li>
              <li>Review the output to identify and remove any unused values from your Helm chart configuration.</li>
            </ul>
          </motion.p>
        </motion.div>
        {/* Code snippet window and copy button */}
        <CodeSnippetContainer>
          <pre>
            <code id="codeSnippet" className="codeSnippet">
              {`
import os
import yaml

# Set the variables for your environment
values_filename = 'values.example.yaml'
templates_dirname = 'templates'
exclude_key_word = 'xxxxfoobarxxxx'

# Function to get all keys from a dictionary
def get_keys_from_dict(dictionary, current_key='', keys_list=None):
    if keys_list is None:
        keys_list = []
    for key, value in dictionary.items():
        new_key = current_key + '.' + str(key) if current_key else str(key)
        if isinstance(value, dict):
            get_keys_from_dict(value, new_key, keys_list)
        else:
            keys_list.append(new_key)
    return keys_list

# Function to get the content of a file
def get_file_content(file_path):
    with open(file_path, 'r') as file:
        return file.read()

# Function to get the content of all YAML files in a directory and its subdirectories
def get_files_content(directory_path):
    content = ''
    for root, dirs, files in os.walk(directory_path):
        for filename in files:
            if filename.endswith(".yaml") or filename.endswith(".yml"):
                content += get_file_content(os.path.join(root, filename))
    return content

# Open and read the file specified by the values_filename variable
with open(values_filename, 'r') as file:
    yaml_dict = yaml.safe_load(file)
    keys_list = get_keys_from_dict(yaml_dict)

# Get the content of all YAML files in the directory specified by the templates_dirname variable
templates_content = get_files_content(templates_dirname)

# Create a list of keys that do not appear in the templates content and do not contain the word 'xxxxfoobarxxxx' and print it
missing_keys = [key for key in keys_list if key not in templates_content and exclude_key_word not in key]
print(missing_keys)
              `}
            </code>
          </pre>
        </CodeSnippetContainer>
        <motion.p variants={variants} style={{ marginBottom: '10px', display: 'flex', justifyContent: 'center' }}>
            <a href="https://patreon.com/Vitrua">
                <img src="/supportmon.png" alt="Support" width="200" style={{ marginTop: '10px' }} />
            </a>
        </motion.p>
      </motion.div>
    </Container>

  );
};

export default HelmunusedTool;
