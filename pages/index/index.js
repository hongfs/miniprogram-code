// index.js
// 获取应用实例
const app = getApp()

Page({
    data: {
        code: '',
    },
    handleLogin() {
        wx.login({
            success: (res) => {
                if (res.errMsg !== 'login:ok') {
                    this.setData({
                        code: `获取code失败：${res.errMsg}`,
                    });
                    return;
                }

                this.setData({
                    code: `${res.code}`,
                });
            },
        });
    },
    handleTel({
        detail,
    }) {
        console.log('handleTel', detail);

        if (detail.errMsg !== 'getPhoneNumber:ok') {
            this.setData({
                code: `获取code失败：${detail.errMsg}`,
            });
            return;
        }

        this.setData({
            code: `${res.code}`,
        });
    },
    handleCopy() {
        const code = this.data.code;

        if (!code) {
            return;
        }

        if (code.indexOf('失败') >= 0) {
            return;
        }

        wx.setClipboardData({
            data: code,
            success: () => {
                wx.showToast({
                    title: '复制成功',
                    icon: 'none',
                });
            },
        });
    },
})