import { differenceInMilliseconds, format, formatDistanceToNow } from 'date-fns'
import { dateLocale } from '~~/blog.config'

/**
 * Chuyển đổi ngày giờ sang định dạng ISO
 * @param date - Chuỗi hoặc đối tượng Date
 * @returns Chuỗi ISO hoặc undefined nếu không có giá trị
 */
export function getIsoDatetime(date?: string | Date) {
    if (!date) return date;

    if (typeof date === 'string') {
        date = new Date(date);
    }

    return date.toISOString();
}

/**
 * Định dạng ngày giờ theo kiểu Việt Nam
 * @param date - Chuỗi hoặc đối tượng Date
 * @returns Chuỗi ngày giờ đã định dạng
 */
export function getLocaleDatetime(date?: string | Date) {
    if (!date) return '';

    if (typeof date === 'string') {
        date = new Date(date);
    }

    return format(date, "dd 'tháng' MM, yyyy, HH:mm:ss", { locale: dateLocale });
}

/**
 * Lấy ngày đăng bài theo phong cách Việt Nam
 * @param date - Chuỗi hoặc đối tượng Date
 * @returns Chuỗi mô tả ngày đăng
 */
export function getPostDate(date?: string | Date) {
    if (!date) return '';

    const now = new Date();
    const parsedDate = typeof date === 'string' ? new Date(date) : date;

    const isWithinAWeek = differenceInMilliseconds(now, parsedDate) < 1000 * 60 * 60 * 24 * 7;
    if (isWithinAWeek) {
        return formatDistanceToNow(parsedDate, { addSuffix: true, locale: dateLocale });
    } else if (isSameYear(now, parsedDate)) {
        return format(parsedDate, "dd 'tháng' MM");
    } else {
        return format(parsedDate, "dd 'tháng' MM, yyyy");
    }
}

/**
 * Tính thời gian đọc dựa trên số mili giây
 * @param ms - Số mili giây
 * @returns Chuỗi mô tả thời gian đọc
 */
export function getReadingTime(ms: number): string {
    return formatDistanceToNow(new Date().getTime() - ms, { locale: dateLocale });
}

/**
 * Kiểm tra xem chênh lệch thời gian giữa hai ngày có đáng kể không
 * @param date1 - Ngày thứ nhất
 * @param date2 - Ngày thứ hai
 * @param threshold - Ngưỡng nhạy cảm (0-1)
 * @returns True nếu chênh lệch đáng kể
 */
export function isTimeDiffSignificant(
    date1?: string | Date,
    date2?: string | Date,
    threshold: number = 0.6
) {
    if (!date1 || !date2) return false;

    const now = new Date();
    const parsedDate1 = typeof date1 === 'string' ? new Date(date1) : date1;
    const parsedDate2 = typeof date2 === 'string' ? new Date(date2) : date2;

    const diff1 = differenceInMilliseconds(now, parsedDate1);
    const diff2 = differenceInMilliseconds(now, parsedDate2);
    return diff1 / diff2 < threshold || diff2 / diff1 < threshold;
}

/**
 * Kiểm tra hai ngày có cùng năm không
 * @param date1 - Ngày thứ nhất
 * @param date2 - Ngày thứ hai
 * @returns True nếu cùng năm
 */
export function isSameYear(date1?: string | Date, date2?: string | Date) {
    if (!date1 || !date2) return false;

    const parsedDate1 = typeof date1 === 'string' ? new Date(date1) : date1;
    const parsedDate2 = typeof date2 === 'string' ? new Date(date2) : date2;
    return parsedDate1.getFullYear() === parsedDate2.getFullYear();
}

/**
 * Tính thời gian trôi qua từ một ngày cụ thể
 * @param date - Ngày cần tính
 * @param maxDepth - Số đơn vị tối đa hiển thị (mặc định: 2)
 * @returns Chuỗi mô tả thời gian trôi qua
 */
export function timeElapse(date?: Date | string, maxDepth = 2) {
    if (!date) return '';

    const parsedDate = typeof date === 'string' ? new Date(date) : date;
    const msecPast = Date.now() - parsedDate.getTime();

    const intervals = [
        { label: 'thế kỷ', threshold: 1000 * 60 * 60 * 24 * 365.2422 * 100 },
        { label: 'năm', threshold: 1000 * 60 * 60 * 24 * 365.2422 },
        { label: 'tháng', threshold: 1000 * 60 * 60 * 24 * 30.44 },
        { label: 'ngày', threshold: 1000 * 60 * 60 * 24 },
        { label: 'giờ', threshold: 1000 * 60 * 60 },
        { label: 'phút', threshold: 1000 * 60 },
        { label: 'giây', threshold: 1000 },
    ];

    let timeString = '';
    let msecRemained = msecPast;
    for (const interval of intervals) {
        const count = Math.floor(msecRemained / interval.threshold);
        if (count <= 0) continue;

        timeString += `${count} ${interval.label} `;
        msecRemained -= count * interval.threshold;
        if (--maxDepth <= 0) break;
    }

    return timeString.trim() || 'vừa xong';
}