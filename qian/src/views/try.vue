<template>
    <!-- 推断action的作用是上传到哪里  哪里是打开本地图片的作用 -->
    <!-- 推断 filelist就是要动态改变的对象，推断要把fillist整个上传给服务器？ -->
    <el-upload v-model:file-list="fileList" class="upload-demo" action="/api/upload" 
    :on-success="onUploadSuccess"
        :on-error="onUploadError" multiple :on-preview="handlePreview" :on-remove="handleRemove"
        :before-remove="beforeRemove" :limit="19" :on-exceed="handleExceed">

        <el-button type="primary">Click to upload</el-button>

        <template #tip>
            <div class="el-upload__tip">
                jpg/png files with a size less than 500KB.
            </div>
        </template>
    </el-upload>
</template>
<script lang="ts" setup>
import { ref } from 'vue'
import { ElMessage, ElMessageBox } from 'element-plus'

import type { UploadProps, UploadUserFile } from 'element-plus'

const fileList = ref<UploadUserFile[]>([
    {
        name: 'element-plus-logo.svg',
        url: 'https://element-plus.org/images/element-plus-logo.svg',
    },
    {
        name: 'element-plus-logo2.svg',
        url: 'https://element-plus.org/images/element-plus-logo.svg',
    },

])

const onUploadSuccess = (response, file, fileList) => {
    ElMessage.success('Upload success');
    console.log('File uploaded successfully:', response);
};

const onUploadError = (err, file, fileList) => {
    ElMessage.error('Upload failed');
    console.error('File upload failed:', err);
};

const handleRemove: UploadProps['onRemove'] = (file, uploadFiles) => {
    console.log(file, uploadFiles)
}

const handlePreview: UploadProps['onPreview'] = (uploadFile) => {
    console.log(uploadFile)
}

const handleExceed: UploadProps['onExceed'] = (files, uploadFiles) => {
    ElMessage.warning(
        `The limit is 3, you selected ${files.length} files this time, add up to ${files.length + uploadFiles.length
        } totally`
    )
}







const beforeRemove: UploadProps['beforeRemove'] = (uploadFile, uploadFiles) => {
    return ElMessageBox.confirm(
        `Cancel the transfer of ${uploadFile.name} ?`
    ).then(
        () => true,
        () => false
    )
}
</script>
